"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const supabase = createClient();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmTouched, setConfirmTouched] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const passwordValid = password.length >= 8 && /[^A-Za-z0-9]/.test(password);
  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!passwordValid) {
      setError("Password must be 8+ characters with a symbol.");
      return;
    }

    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;

      setSuccess(true);
      await supabase.auth.signOut();
    } catch (err: any) {
      setError(err.message ?? "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center text-center gap-3 p-4">
        <h1 className="text-2xl font-bold">Password updated</h1>
        <p className="text-muted-foreground text-sm max-w-xs">
          Thank you — your password has been reset. You can now log in to the
          app with your new password.
        </p>
      </div>
    );
  }

  return (
    <form
      className={cn("flex flex-col gap-3", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <FieldGroup className="gap-3">
        {error && (
          <div className="text-sm text-red-500 text-center mb-1">{error}</div>
        )}

        {/* Header spacing adjusted here */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-sm text-muted-foreground text-balance mb-3.5">
            Choose a new password to secure your account.
          </p>
        </div>

        {/* New Password */}
        <Field className="gap-1">
          <FieldLabel htmlFor="password">New Password</FieldLabel>

          <div className="relative">
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Create a strong password"
              className={cn(
                "pr-10 transition-colors",
                password.length > 0 && passwordValid && "border-green-600",
                passwordTouched &&
                  password.length > 0 &&
                  !passwordValid &&
                  "border-red-500",
              )}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordTouched(true)}
            />

            <Button
              type="button"
              variant="ghost"
              tabIndex={-1}
              size="icon"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent text-muted-foreground"
            >
              {passwordVisible ? <EyeOffIcon /> : <EyeIcon />}
            </Button>
          </div>

          <p className="text-sm mt-0.5 h-5 mb-2">
            {!passwordTouched && !passwordValid && (
              <span className="text-muted-foreground">
                Use 8+ characters with a symbol.
              </span>
            )}

            {password.length > 0 && passwordValid && (
              <span className="text-green-600">
                Password strength looks good.
              </span>
            )}

            {passwordTouched && password.length > 0 && !passwordValid && (
              <span className="text-red-500">
                Must be 8+ characters with a symbol.
              </span>
            )}
          </p>
        </Field>

        {/* Confirm Password */}
        <Field className="gap-1">
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>

          <div className="relative">
            <Input
              id="confirmPassword"
              type={confirmVisible ? "text" : "password"}
              placeholder="Type it again to confirm"
              className={cn(
                "pr-10 transition-colors",
                confirmPassword.length > 0 &&
                  passwordsMatch &&
                  "border-green-600",
                confirmTouched &&
                  confirmPassword.length > 0 &&
                  !passwordsMatch &&
                  "border-red-500",
              )}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => setConfirmTouched(true)}
            />

            <Button
              type="button"
              variant="ghost"
              tabIndex={-1}
              size="icon"
              onClick={() => setConfirmVisible(!confirmVisible)}
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent text-muted-foreground"
            >
              {confirmVisible ? <EyeOffIcon /> : <EyeIcon />}
            </Button>
          </div>

          <p className="text-sm mt-0.5 h-5 mb-4">
            {confirmPassword.length > 0 && passwordsMatch && (
              <span className="text-green-600">Passwords match.</span>
            )}

            {confirmTouched &&
              confirmPassword.length > 0 &&
              !passwordsMatch && (
                <span className="text-red-500">Passwords do not match.</span>
              )}
          </p>
        </Field>

        <Field>
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || !password || !confirmPassword}
          >
            {isLoading ? "Saving..." : "Save new password"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
