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
    <div className="flex justify-center">
      <NavigationMenu>
        <NavigationMenuList className="space-x-4"> {/* Added space between items */}
          {/* Home */}
          <NavigationMenuItem>
            <Link href="/" passHref legacyBehavior>
              <NavigationMenuLink className="inline-flex items-center justify-center rounded-md px-6 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <Link href="/about" passHref legacyBehavior>
              <NavigationMenuLink className="inline-flex items-center justify-center rounded-md px-6 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Courses */}
          <NavigationMenuItem>
            <Link href="/courses" passHref legacyBehavior>
              <NavigationMenuLink className="inline-flex items-center justify-center rounded-md px-6 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                Courses
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Contact */}
          <NavigationMenuItem>
            <Link href="/contact" passHref legacyBehavior>
              <NavigationMenuLink className="inline-flex items-center justify-center rounded-md px-6 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
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