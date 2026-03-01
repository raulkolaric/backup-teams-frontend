"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { GoogleLogin } from "@react-oauth/google";
import { loginWithGoogleAction } from "@/lib/auth-actions";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleStandardLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    // For now we'll simulate an error, since we focus on Google Auth
    setTimeout(() => {
      toast.error("Standard email login is disabled for development. Please use Google Login.");
      setIsPending(false);
    }, 1000);
  };

  const handleGoogleSuccess = async (credentialResponse: any) => {
    setIsPending(true);
    try {
      if (!credentialResponse.credential) {
        toast.error("Invalid Google response");
        return;
      }
      
      const res = await loginWithGoogleAction(credentialResponse.credential);
      if (res?.error) {
        toast.error(res.error);
        setIsPending(false);
      } else {
        toast.success("Login successful!");
        router.push("/dashboard");
      }
    } catch (err) {
      toast.error("Network or server error.");
      setIsPending(false);
    }
  };

  const handleGoogleError = () => {
    toast.error("Google Login Failed");
  };

  return (
    <div className="w-full space-y-6 flex flex-col items-center">
      <div className="w-full flex justify-center">
        {!isPending ? (
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            shape="rectangular"
            theme="filled_black"
          />
        ) : (
          <div className="h-10 text-muted-foreground animate-pulse text-sm flex items-center">
            Authenticating...
          </div>
        )}
      </div>

      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <form onSubmit={handleStandardLogin} className="w-full space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="m@example.com" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
            className="bg-background border-border placeholder:text-muted-foreground/50"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-foreground">Password</Label>
            <a href="#" className="text-xs text-accent hover:underline">
              Forgot password?
            </a>
          </div>
          <Input 
            id="password" 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
            className="bg-background border-border"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isPending}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
        >
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </form>
      
      <div className="text-center text-sm text-muted-foreground mt-4">
        Don&apos;t have an account?{" "}
        <a href="#" className="text-accent hover:underline decoration-accent/50 underline-offset-4">
          Register
        </a>
      </div>
    </div>
  );
}
