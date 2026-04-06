import { NextResponse } from "next/server"

const RECIPIENT_EMAIL = "support@setax.online"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, service, description } = body

    // Validate required fields
    if (!name || !email || !service || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.warn(
        "[contact] Missing RESEND_API_KEY – email not sent. Add it to your .env.local / hosting env."
      )
      return NextResponse.json(
        { error: "Email service not configured on the server." },
        { status: 500 }
      )
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SetaX <support@setax.online>",
        to: [RECIPIENT_EMAIL],
        subject: `New Project Request: ${service} - from ${name}`,
        html: `
          <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #5E17EB; padding: 24px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Project Request</h1>
            </div>
            <div style="background: #f9f5ff; padding: 24px; border: 1px solid #e9d5ff; border-top: none; border-radius: 0 0 12px 12px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #5E17EB;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Service:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${service}</td>
                </tr>
              </table>
              <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e9d5ff;">
                <p style="color: #6b7280; font-weight: 600; margin-bottom: 8px;">Project Description:</p>
                <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${description}</p>
              </div>
            </div>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      // Try to read structured error if available
      let errorDetail = "Failed to send email via Resend."
      try {
        const errorText = await res.text()
        errorDetail = errorText
        const parsed = JSON.parse(errorText)
        errorDetail =
          parsed?.message ||
          parsed?.error ||
          parsed?.name ||
          JSON.stringify(parsed, null, 2)
      } catch {
        // keep default
      }

      console.error("Resend API error:", errorDetail)
      return NextResponse.json(
        { error: errorDetail || "Failed to send email. Please try again." },
        { status: res.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred while sending email." },
      { status: 500 }
    )
  }
}
