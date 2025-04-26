import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Get the saved theme from localStorage or use system preference
    const savedTheme = localStorage.getItem("theme") as Theme;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme) {
      // Apply theme to document root element
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);

      // Save theme preference to localStorage
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return { theme, setTheme };
}
