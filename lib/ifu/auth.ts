export function isAuthorizedPublisher(email: string | undefined): boolean {
  if (!email) return false;
  const allowed = (process.env.IFU_PUBLISHER_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase());
  return allowed.includes(email.toLowerCase());
}
