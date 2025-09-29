
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <div className={`${navigationMenuTriggerStyle()} flex items-center`}>
              <Image
                src="/icon8-robot-60.png"
                alt="Home"
                width={24}
                height={24}
                className="mr-2"
              />
              Home
            </div>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#features">
            <div className={navigationMenuTriggerStyle()}>Features</div>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#pricing">
            <div className={navigationMenuTriggerStyle()}>Pricing</div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
