import React from "react";
import { cn } from "../../../utils/classNames";

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

function NavLink({ href, isActive, children }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <>
      {href == "/consistent-actor" ? (
        <>
          {" "}
          <button
            className={`${
              isActive
                ? cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    "hover:bg-black/5",
                    isActive ? "text-black bg-black/5" : "text-black/40"
                  )
                : "btn btn-pulse  rounded-full text-black/40"
            } `}
            onClick={handleClick}
          >
            <span>{children}</span>
          </button>
        </>
      ) : (
        <>
          {" "}
          <button
            onClick={handleClick}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              "hover:bg-black/5",
              isActive ? "text-black bg-black/5" : "text-black/40"
            )}
          >
            {children}
          </button>
        </>
      )}
    </>
  );
}

export function NavLinks() {
  const currentPath = window.location.pathname;

  return (
    <div className="flex items-center justify-center space-x-1">
      <NavLink
        href="/ugc-actor"
        isActive={currentPath === "/ugc-actor" || currentPath === "/"}
      >
        UGC Actor
      </NavLink>
      <NavLink
        href="/consistent-actor"
        isActive={currentPath === "/consistent-actor"}
      >
        Consistent Actor
      </NavLink>
      <NavLink href="/gallery" isActive={currentPath === "/gallery"}>
        Gallery
      </NavLink>
    </div>
  );
}
