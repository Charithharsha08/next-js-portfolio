"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ColorPalette = {
  name: string
  primary: string
  secondary: string
  accent: string
}

const colorPalettes: ColorPalette[] = [
  {
    name: "Blue Ocean",
    primary: "oklch(0.7 0.15 200)",
    secondary: "oklch(0.6 0.12 160)",
    accent: "oklch(0.65 0.13 280)",
  },
  {
    name: "Emerald Forest",
    primary: "oklch(0.7 0.15 150)",
    secondary: "oklch(0.6 0.12 120)",
    accent: "oklch(0.65 0.13 180)",
  },
  {
    name: "Sunset Orange",
    primary: "oklch(0.7 0.15 40)",
    secondary: "oklch(0.6 0.12 60)",
    accent: "oklch(0.65 0.13 20)",
  },
  {
    name: "Purple Galaxy",
    primary: "oklch(0.7 0.15 280)",
    secondary: "oklch(0.6 0.12 300)",
    accent: "oklch(0.65 0.13 260)",
  },
  {
    name: "Rose Gold",
    primary: "oklch(0.7 0.15 350)",
    secondary: "oklch(0.6 0.12 20)",
    accent: "oklch(0.65 0.13 330)",
  },
]

type ThemeContextType = {
  theme: Theme
  colorPalette: ColorPalette
  toggleTheme: () => void
  setColorPalette: (palette: ColorPalette) => void
  colorPalettes: ColorPalette[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [colorPalette, setColorPaletteState] = useState<ColorPalette>(colorPalettes[0])

  useEffect(() => {
    // Load saved theme and color palette from localStorage
    const savedTheme = localStorage.getItem("theme") as Theme
    const savedPalette = localStorage.getItem("colorPalette")

    if (savedTheme) {
      setTheme(savedTheme)
    }

    if (savedPalette) {
      const palette = JSON.parse(savedPalette)
      setColorPaletteState(palette)
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  useEffect(() => {
    // Apply color palette to CSS variables
    const root = document.documentElement

    if (theme === "light") {
      root.style.setProperty("--background", "oklch(0.98 0.01 240)")
      root.style.setProperty("--foreground", "oklch(0.08 0.02 240)")
      root.style.setProperty("--card", "oklch(1 0 0)")
      root.style.setProperty("--card-foreground", "oklch(0.08 0.02 240)")
      root.style.setProperty("--muted", "oklch(0.96 0.01 240)")
      root.style.setProperty("--muted-foreground", "oklch(0.4 0.01 240)")
      root.style.setProperty("--border", "oklch(0.9 0.01 240)")
      root.style.setProperty("--input", "oklch(0.96 0.01 240)")
    } else {
      root.style.setProperty("--background", "oklch(0.08 0.02 240)")
      root.style.setProperty("--foreground", "oklch(0.95 0.01 240)")
      root.style.setProperty("--card", "oklch(0.12 0.02 240)")
      root.style.setProperty("--card-foreground", "oklch(0.95 0.01 240)")
      root.style.setProperty("--muted", "oklch(0.16 0.02 240)")
      root.style.setProperty("--muted-foreground", "oklch(0.6 0.01 240)")
      root.style.setProperty("--border", "oklch(0.2 0.02 240)")
      root.style.setProperty("--input", "oklch(0.16 0.02 240)")
    }

    // Apply color palette
    root.style.setProperty("--primary", colorPalette.primary)
    root.style.setProperty("--accent", colorPalette.accent)
    root.style.setProperty("--ring", colorPalette.primary)

    localStorage.setItem("colorPalette", JSON.stringify(colorPalette))
  }, [theme, colorPalette])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  const setColorPalette = (palette: ColorPalette) => {
    setColorPaletteState(palette)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colorPalette,
        toggleTheme,
        setColorPalette,
        colorPalettes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
