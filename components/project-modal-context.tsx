"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ProjectModalContextType = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ProjectModalContext = createContext<ProjectModalContextType | null>(null)

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ProjectModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  )
}

export function useProjectModal() {
  const context = useContext(ProjectModalContext)
  if (!context) {
    throw new Error("useProjectModal must be used within a ProjectModalProvider")
  }
  return context
}
