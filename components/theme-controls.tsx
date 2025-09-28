"use client";

import { useTheme } from "@/contexts/theme-context";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeControls() {
  const { theme, toggleTheme, colorPalette, setColorPalette, colorPalettes } =
    useTheme();

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2 mt-2">
      {/* Theme Toggle */}
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="bg-background/90 border-2 border-primary/50 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-300 shadow-sm"
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>

      {/* Color Palette Selector */}
      <DropdownMenu>
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
      </DropdownMenu>
    </div>
  );
}
