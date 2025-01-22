import React from "react";
import { Card } from "../../components/ui/Card";
import { AuthForm } from "../../features/auth/components/AuthForm";
import { Sparkles } from "lucide-react";

export function AuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-black/5 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black/5 mb-6">
            <Sparkles className="h-8 w-8 text-black/60" />
          </div>
          <h1 className="text-xl sm:text-3xl font-semibold mb-2">
            Welcome Back
          </h1>
          <p className="text-black/60 text-sm sm:text-xl">
            Sign in to your account to continue
          </p>
        </div>

        <Card className="p-8">
          <AuthForm />
        </Card>

        <p className="mt-8 text-center sm:text-sm text-xs text-black/60">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-black hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-black hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
