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

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Password rules
  const passwordValid = password.length >= 8 && /[^A-Za-z0-9]/.test(password); // at least one symbol

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!passwordValid) {
      setError("Password must be at least 8 characters and include a symbol.");
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

      // Optional: sign out after success
      await supabase.auth.signOut();
    } catch (err: any) {
      setError(err.message ?? "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }

  // -------------------------
  // SUCCESS SCREEN
  // -------------------------
  if (success) {
    return (
      <div className="flex flex-col items-center text-center gap-4 p-4">
        <h1 className="text-2xl font-bold">Password updated</h1>
        <p className="text-muted-foreground text-sm max-w-xs">
          Thank you — your password has been reset. You should now be able to
          log in to the app with your new password.
        </p>
      </div>
    );
  }

  // -------------------------
  // FORM SCREEN
  // -------------------------
  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-sm text-muted-foreground text-balance">
            Choose a new password to secure your account.
          </p>
        </div>

        {/* New Password */}
        <Field>
          <FieldLabel htmlFor="password">New Password</FieldLabel>
          <div className="relative">
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Create a strong password"
              className="pr-10"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          {/* Password rule feedback */}
          {password.length > 0 && (
            <p
              className={cn(
                "text-sm mt-1",
                passwordValid ? "text-green-600" : "text-red-500",
              )}
            >
              {passwordValid
                ? "Password strength looks good."
                : "Must be at least 8 characters and include a symbol."}
            </p>
          )}
        </Field>

        {/* Confirm Password */}
        <Field>
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={confirmVisible ? "text" : "password"}
              placeholder="Type it again to confirm"
              className="pr-10"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          {/* Live match feedback */}
          {confirmPassword.length > 0 && (
            <p
              className={cn(
                "text-sm mt-1",
                passwordsMatch ? "text-green-600" : "text-red-500",
              )}
            >
              {passwordsMatch ? "Passwords match." : "Passwords do not match."}
            </p>
          )}

          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </Field>

        {/* Submit */}
        <Field>
          <Button
            type="submit"
            className="w-full"
            disabled={
              isLoading ||
              !passwordValid ||
              !passwordsMatch ||
              !password ||
              !confirmPassword
            }
          >
            {isLoading ? "Saving..." : "Save new password"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
