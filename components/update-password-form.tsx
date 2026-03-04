"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const supabase = createClient();
  const router = useRouter();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;

      setSuccess(true);
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
              placeholder="••••••••••••••••"
              className="pr-10"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent text-muted-foreground"
            >
              {passwordVisible ? <EyeOffIcon /> : <EyeIcon />}
            </Button>
          </div>
        </Field>

        {/* Confirm Password */}
        <Field>
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={confirmVisible ? "text" : "password"}
              placeholder="••••••••••••••••"
              className="pr-10"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setConfirmVisible(!confirmVisible)}
              className="absolute right-0 top-0 h-full px-3 hover:bg-transparent text-muted-foreground"
            >
              {confirmVisible ? <EyeOffIcon /> : <EyeIcon />}
            </Button>
          </div>

          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </Field>

        {/* Submit */}
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
