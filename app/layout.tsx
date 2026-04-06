import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'

import './globals.css'

const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const _inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'SetaX - Premium Digital Solutions by Women in Tech',
  description: 'SetaX is a leading digital solutions company driven by a talented all-female remote team, specializing in custom websites, mobile apps, and digital experiences.',
}

export const viewport = {
  themeColor: '#5E17EB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
