import Link from "next/link";
import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { NavItems } from "./NavItems";

const Navbar = () => {
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
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
