import { UserAuthForm } from "@/components/user-auth-form"
import Link from "next/link"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-light-gray-bg dark:bg-charcoal">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] p-6 bg-white dark:bg-deep-brown rounded-lg shadow-xl border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-3xl font-bold font-serif text-charcoal dark:text-gold">Create Your VogueVault Account</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Enter your email below to create your account</p>
        </div>
        <UserAuthForm type="sign-up" />
        <p className="px-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="underline underline-offset-4 hover:text-gold transition-colors"
            prefetch={false}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
