"use client"

import * as React from "react"
import Link from "next/link"
import { CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">
              <span className="flex items-center">
                <Image
                  src="/icon8-robot-60.png"
                  alt="Home"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Home
              </span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
                <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={navigationMenuTriggerStyle()}>Product</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[500px]">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <CircleIcon className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Notifme
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Your all-in-one customer engagement platform
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/conversation-ai" title="Conversation AI">
                AI-powered conversations for your business
              </ListItem>
              <ListItem href="/webchat-ai" title="Webchat AI">
                Engage with your customers on your website
              </ListItem>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/blog">Blogs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
}: {
  title: string
  children: React.ReactNode
  href: string
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
