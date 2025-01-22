import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../features/auth/context/useAuth";

export function Footer() {
  const { user } = useAuth();
  return (
    <footer className="py-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center space-x-8">
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink href="/terms">Terms</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
          {user && <FooterLink href="/report">Report</FooterLink>}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      to={href}
      className="text-sm text-black/40 hover:text-black transition-colors"
    >
      {children}
    </Link>
  );
}
