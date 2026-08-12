"use client";

import Link from "next/link";

type ScrollToHashLinkProps = {
  href: `#${string}`;
  className?: string;
  children: React.ReactNode;
};

export function ScrollToHashLink({
  href,
  className,
  children,
}: ScrollToHashLinkProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
