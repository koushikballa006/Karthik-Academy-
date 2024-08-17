import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center w-full bg-white dark:bg-black">
      <NavigationMenu className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <NavigationMenuList className="flex flex-wrap space-x-4 justify-center sm:justify-end">
          {/* Home */}
          <NavigationMenuItem>
            <Link href="/" passHref legacyBehavior>
              <NavigationMenuLink className="inline-flex items-center justify-center rounded-md px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <Link href="/about" passHref legacyBehavior>
              <NavigationMenuLink className="inline-flex items-center justify-center rounded-md px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Courses */}
          <NavigationMenuItem>
            <Link href="/courses" passHref legacyBehavior>
              <NavigationMenuLink className="inline-flex items-center justify-center rounded-md px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                Courses
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Contact */}
          <NavigationMenuItem>
            <Link href="/contact" passHref legacyBehavior>
              <NavigationMenuLink className="inline-flex items-center justify-center rounded-md px-4 py-2 text-base sm:px-6 sm:py-3 sm:text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
