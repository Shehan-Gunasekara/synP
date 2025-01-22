import React from "react";
import { Button } from "../ui/Button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-black/5 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-medium">synthetic ugc</div>
          <div className="flex items-center space-x-8">
            <NavLink>Gallery</NavLink>
            <NavLink>Explore</NavLink>
            <Button size="sm">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="text-sm text-black/60 hover:text-black transition-colors"
    >
      {children}
    </a>
  );
}
