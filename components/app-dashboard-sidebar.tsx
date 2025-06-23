"use client"

import type * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Package, Upload, Settings, ShoppingBag, Users, ChevronDown } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function AppDashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Products",
      icon: Package,
      subItems: [
        {
          title: "View All",
          href: "/dashboard/products",
          icon: Package,
        },
        {
          title: "Upload New",
          href: "/dashboard/products/upload",
          icon: Upload,
        },
      ],
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: ShoppingBag,
    },
    {
      title: "Customers",
      href: "/dashboard/customers",
      icon: Users,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          href="/dashboard"
          className="flex items-center justify-center text-charcoal hover:text-gold transition-colors py-2"
          prefetch={false}
        >
          <ShoppingBag className="h-7 w-7 mr-2" />
          <span className="text-xl font-bold tracking-wide font-serif">VogueVault Admin</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible
                      defaultOpen={pathname.startsWith(item.href || "")}
                      className="group/collapsible w-full"
                    >
                      <SidebarGroupLabel asChild>
                        <CollapsibleTrigger className="w-full flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <item.icon />
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </CollapsibleTrigger>
                      </SidebarGroupLabel>
                      <CollapsibleContent>
                        <SidebarMenu>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuItem key={subItem.title}>
                              <SidebarMenuButton asChild isActive={pathname === subItem.href}>
                                <Link href={subItem.href}>
                                  <subItem.icon className="size-4" />
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild isActive={pathname === item.href}>
                      <Link href={item.href || "#"}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
