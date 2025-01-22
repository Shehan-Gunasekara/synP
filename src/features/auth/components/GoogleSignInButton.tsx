import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "../../../components/ui/Button";
import { useAuth } from "../context/useAuth";
// import { useAuth } from "../hooks/useAuth";

interface Props {
  mode?: "signin" | "signup";
  setError: (error: string | null) => void;
}

export function GoogleSignInButton({ mode = "signin", setError }: Props) {
  const { signInWithGoogle } = useAuth();
  const handleGoogleAuth = async () => {
    try {
      setError(null);
      await signInWithGoogle();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to sign in with Google"
      );
    }
  };
  return (
    <Button
      variant="secondary"
      className="w-full text-sm sm:text-base"
      onClick={handleGoogleAuth}
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google"
        className="w-5 h-5 mr-2"
      />
      {mode === "signin" ? "Sign in with Google" : "Sign up with Google"}
    </Button>
  );
}
