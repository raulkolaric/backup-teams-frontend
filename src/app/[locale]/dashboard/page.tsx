import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { DashboardOverview } from "@/components/features/dashboard/DashboardOverview";
import { getLocale } from "next-intl/server";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken");
  const locale = await getLocale();

  // Protect the route: if no token is found in the HttpOnly cookies,
  // push the user back to the login screen using the current locale.
  if (!token?.value) {
    redirect(`/${locale}/login`);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DashboardOverview />
    </div>
  );
}
