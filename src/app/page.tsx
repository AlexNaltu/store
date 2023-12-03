import Image from "next/image";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownIcon, CheckCircle, Leaf } from "lucide-react";

export default function Home() {
  const perks = [
    {
      name: "Instant Delivery",
      Icon: ArrowDownIcon,
      description:
        " Get your product instantly after purchase in seaconds and download right away",
    },
    {
      name: "Guaranteed Quality",
      Icon: CheckCircle,
      description:
        "The best quality products on the market is verified by our team to ensure our highest quality standars.Not happy with your purchase? We offer a 30 day money back guarantee",
    },
    {
      name: "For The Planet",
      Icon: Leaf,
      description:
        "We've pledge 1% of our profits to plant trees and help the planet",
    },
  ];
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
            Your Marketplace for the best{" "}
            <span className="text-blue-600">Digital Products</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo.Every asset is verified by our team to
            ensure the best quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 my-4">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="border-t-2 border-gray-200 bg-gray-50 p-3">
        <MaxWidthWrapper>
          <div className="grid grid-col-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:text-items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-made font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
