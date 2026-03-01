"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Assumes we are deploying to production url based on user request.
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.backup-teams.com";

export async function loginWithGoogleAction(credential: string) {
  try {
    const response = await fetch(`${API_URL}/auth/login/google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ credential }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Login Error from API:", data.detail || "Unknown error");
      return { error: data.detail || "Authentication failed." };
    }

    // Set HttpOnly cookie keeping the token safe from client JS
    // Await `cookies()` as required by Next.js 15+ patterns
    const cookieStore = await cookies();
    cookieStore.set("authToken", data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return { success: true };
  } catch (error) {
    console.error("Network or parsing error during login:", error);
    return { error: "Failed to connect to the server." };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("authToken");
  redirect("/login");
}
