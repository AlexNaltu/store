import Link from "next/link";
import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { NavItems } from "./NavItems";
import { buttonVariants } from "@/app/components/ui/button";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;
  return (
    <div className="sticky top-0 inset-x-0 bg-white z-50 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            {/*Mobile design */}
            <div className="flex ml-4 lg:ml-0">
              <Link href="/">
                <Icons.logo className="h-10 w-10" />
              </Link>
              <div className="hidden lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-8">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign In
                    </Link>
                  )}

                  {user ? null : (
                    <span className="h-6 bg-gray-200 w-px" aria-hidden="true" />
                  )}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Create Account
                    </Link>
                  )}

                  {user ? <span className="h-6  w-px bg-gray-200" /> : null}

                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span className="h-6 bg-gray-200 w-px" />
                    </div>
                  )}

                  <div>
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
