"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { lightPages, backNavHrefs } from "@/lib/navLinks";
import { NavMenu } from "@/components/layout/NavMenu";

export function NavBar() {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState({ open: false, pathname });

  if (menuState.pathname !== pathname) {
    setMenuState({ open: false, pathname });
  }

  const menuOpen = menuState.open;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const useDarkNav = lightPages.has(pathname);
  const backHref = backNavHrefs[pathname];
  const showBackNav = Boolean(backHref);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          menuOpen
            ? "border-transparent bg-transparent"
            : `border-text-primary/8 ${useDarkNav ? "bg-background" : "bg-surface-dark"}`
        }`}
      >
        <div
          className={`flex items-center py-4 ${
            useDarkNav || showBackNav
              ? "px-[var(--spacing-page-x)]"
              : "px-[var(--spacing-page-x)] md:px-6"
          } ${
            showBackNav ? "justify-between" : "relative justify-end md:justify-between"
          }`}
        >
          {showBackNav && backHref ? (
            <Link
              href={backHref}
              aria-label="Go back"
              className={`flex h-11 w-11 items-center justify-center transition-colors ${
                useDarkNav
                  ? "text-text-primary/80 hover:text-text-primary"
                  : "text-text-on-dark hover:text-text-on-dark-subtle"
              }`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </Link>
          ) : (
            <Link
              href="/home"
              className="absolute left-1/2 flex -translate-x-1/2 items-center md:static md:translate-x-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  useDarkNav
                    ? "/assets/burgerbots-logo-nav.png"
                    : "/logo.png"
                }
                alt="BurgerBots Logo"
                width={440}
                height={472}
                style={{ height: "52px", width: "auto" }}
              />
            </Link>
          )}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuState((state) => ({ ...state, open: !state.open }))}
            className={`relative flex h-11 w-11 items-center justify-center transition-colors ${
              useDarkNav ? "text-text-primary" : "text-text-on-dark"
            }`}
          >
            <span
              className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </header>

      <NavMenu
        open={menuOpen}
        onClose={() => setMenuState((state) => ({ ...state, open: false }))}
        pathname={pathname}
      />
    </>
  );
}
