"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

        const shouldBeDark = stored === "dark" || (!stored && prefersDark);

        setIsDark(shouldBeDark);

        if (shouldBeDark) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);

        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Changer le thème"
            className="relative flex h-8 w-14 items-center rounded-full bg-slate-200 px-1 shadow-sm ring-1 ring-slate-300 transition dark:bg-slate-800 dark:ring-slate-600"
        >
            <span
                className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md text-[0.7rem] transition-transform duration-300 dark:bg-slate-200 ${isDark ? "translate-x-6" : "translate-x-0"
                    }`}
            >
                {isDark ? "🌙" : "☀️"}
            </span>
        </button>
    );
}
