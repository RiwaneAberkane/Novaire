"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function MobileMenu() {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((prev) => !prev);

    // Empêche le scroll quand le menu est ouvert
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            {/* Bouton hamburger / croix */}
            <button
                onClick={toggle}
                aria-label="Menu mobile"
                aria-expanded={open}
                className="relative flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-slate-100 shadow-sm ring-1 ring-slate-700 transition sm:hidden dark:bg-slate-100 dark:text-slate-900 dark:ring-slate-300"
            >
                {/* barre du haut / diagonale */}
                <span
                    className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1.5"
                        }`}
                />
                {/* barre du bas / diagonale */}
                <span
                    className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1.5"
                        }`}
                />
            </button>

            {/* BACKDROP */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
            />

            {/* MENU SLIDE */}
            <aside
                className={`fixed top-0 right-0 z-40 flex h-full w-[72%] max-w-xs flex-col gap-6 bg-slate-950 px-6 py-10 text-slate-50 shadow-xl transition-transform duration-300 dark:bg-slate-900 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="mb-6 text-xs uppercase tracking-[0.25em] text-slate-500">
                    Menu
                </div>

                <Link
                    href="/"
                    onClick={toggle}
                    className="text-base font-medium text-slate-50 hover:text-slate-200"
                >
                    Accueil
                </Link>

                <Link
                    href="/products"
                    onClick={toggle}
                    className="text-base font-medium text-slate-50 hover:text-slate-200"
                >
                    Boutique
                </Link>

                <a
                    href="#about"
                    onClick={toggle}
                    className="text-base font-medium text-slate-50 hover:text-slate-200"
                >
                    À propos
                </a>

                <div className="mt-8 border-t border-slate-800 pt-6">
                    <ThemeToggle />
                </div>
            </aside>
        </>
    );
}
