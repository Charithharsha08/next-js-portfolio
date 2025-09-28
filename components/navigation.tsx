"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, colorPalette, setColorPalette, colorPalettes } =
    useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 border-primary/50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-semibold text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
          >
            Charith Harsha
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-all duration-300 text-sm relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="flex gap-2 ml-4">
              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="bg-background/90 border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 shadow-sm"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>

              {/* Color Palette Selector */}
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-background/90 border-2 border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 shadow-sm"
                  >
                    <Palette className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-background/95 border-primary/50 shadow-lg"
                >
                  <div className="p-2">
                    <p className="text-sm font-medium mb-2 text-foreground/80">
                      Color Themes
                    </p>
                    <div className="space-y-1">
                      {colorPalettes.map((palette) => (
                        <DropdownMenuItem
                          key={palette.name}
                          onClick={() => setColorPalette(palette)}
                          className={`flex items-center gap-3 cursor-pointer rounded-md p-2 transition-colors ${
                            colorPalette.name === palette.name
                              ? "bg-primary/20 text-primary"
                              : "hover:bg-primary/10 text-foreground"
                          }`}
                        >
                          <div className="flex gap-1">
                            <div
                              className="w-4 h-4 rounded-full border border-border/50"
                              style={{ backgroundColor: palette.primary }}
                            />
                            <div
                              className="w-4 h-4 rounded-full border border-border/50"
                              style={{ backgroundColor: palette.secondary }}
                            />
                            <div
                              className="w-4 h-4 rounded-full border border-border/50"
                              style={{ backgroundColor: palette.accent }}
                            />
                          </div>
                          <span className="text-sm">{palette.name}</span>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/50 pt-4 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors text-sm py-2 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="flex gap-2 pt-3 border-t border-primary/50">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className="bg-background/90 border-1 border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 shadow-sm"
                >
                  {theme === "light" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </Button>

                {/* <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-background/90 border-2 border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 shadow-sm"
                    >
                      <Palette className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-48 bg-background/95 border-primary/50 shadow-lg"
                  >
                    <div className="p-2">
                      <p className="text-sm font-medium mb-2 text-foreground/80">
                        Color Themes
                      </p>
                      <div className="space-y-1">
                        {colorPalettes.map((palette) => (
                          <DropdownMenuItem
                            key={palette.name}
                            onClick={() => setColorPalette(palette)}
                            className={`flex items-center gap-3 cursor-pointer rounded-md p-2 transition-colors ${
                              colorPalette.name === palette.name
                                ? "bg-primary/20 text-primary"
                                : "hover:bg-primary/10 text-foreground"
                            }`}
                          >
                            <div className="flex gap-1">
                              <div
                                className="w-4 h-4 rounded-full border border-border/50"
                                style={{ backgroundColor: palette.primary }}
                              />
                              <div
                                className="w-4 h-4 rounded-full border border-border/50"
                                style={{ backgroundColor: palette.secondary }}
                              />
                              <div
                                className="w-4 h-4 rounded-full border border-border/50"
                                style={{ backgroundColor: palette.accent }}
                              />
                            </div>
                            <span className="text-sm">{palette.name}</span>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu> */}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
