import { useEffect, useState } from "react";

export function useDarkMode() {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            const savedMode = localStorage.getItem('darkMode');
            return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (darkMode) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
      }, [darkMode]);

      return [darkMode, setDarkMode] as const
}