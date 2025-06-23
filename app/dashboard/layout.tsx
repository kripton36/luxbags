import type React from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppDashboardSidebar } from "@/components/app-dashboard-sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { User, LogOut } from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      {" "}
      {/* Sidebar open by default for dashboard */}
      <AppDashboardSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-white shadow-sm">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-lg font-semibold text-charcoal">Dashboard</h1>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/sign-in">
                {" "}
                {/* Conceptual logout, redirects to sign-in */}
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Link>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
