"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils" // Assuming cn utility is available
import { Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast" // Assuming use-toast is available

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type: "sign-in" | "sign-up"
}

export function UserAuthForm({ className, type, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    toast({
      title: type === "sign-in" ? "Login Successful!" : "Account Created!",
      description: type === "sign-in" ? "Welcome back to VogueVault." : "Your VogueVault account is ready.",
    })
    // In a real app, you'd handle actual authentication (e.g., redirect, set token)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-charcoal dark:text-cream">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              className="bg-white dark:bg-deep-brown border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" className="text-charcoal dark:text-cream">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              autoComplete={type === "sign-in" ? "current-password" : "new-password"}
              disabled={isLoading}
              className="bg-white dark:bg-deep-brown border-gray-300 dark:border-gray-600 text-charcoal dark:text-cream focus:ring-gold focus:border-gold"
            />
          </div>
          <Button disabled={isLoading} className="bg-gold text-white hover:bg-gold/90 rounded-full h-10">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </Button>
        </div>
      </form>
    </div>
  )
}
