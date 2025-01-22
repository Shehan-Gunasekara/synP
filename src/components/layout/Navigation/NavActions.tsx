import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { Loader2 } from "lucide-react";
import { useAuth } from "../../../features/auth/context/useAuth";

export function NavActions() {
  const { user, logOut, userCredits } = useAuth();

  const handleAuth = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/auth");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", "/purchase");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const handleSignOut = async () => {
    await logOut();
    window.location.reload();
  };

  return (
    <div className="flex flex-col sm:flex-row items-end sm:items-center space-x-4">
      {user ? (
        <>
          <span className="text-sm text-black/60">
            Welcome, {user.displayName}
          </span>
          <Button variant="ghost" size="sm" onClick={handleSignOut}>
            Sign Out
          </Button>
        </>
      ) : (
        <Button variant="ghost" size="sm" onClick={handleAuth}>
          Sign In
        </Button>
      )}

      <Button size="sm" onClick={handlePurchase}>
        {user ? (
          <span className="text-white flex flex-row">
            Credits:
            {userCredits != null ? (
              userCredits.toFixed(2)
            ) : (
              <Loader2 className="h-3 w-3 ml-2 mt-1 animate-spin" />
            )}
          </span>
        ) : (
          <span className="text-white">View Plans</span>
        )}
      </Button>
    </div>
  );
}
