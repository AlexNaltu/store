"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { Separator } from "@/app/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Cart = () => {
  const itemCount = 0;

  const fee = 1;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCartIcon
          className="h-6 w-6 flex-shrink-0 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium hover:text-gray-800 group-hover:text-gray-900">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full pr-0 sm:max-w-lg">
        <SheetHeader className="pr-6 gap-y-2">
          <SheetTitle>Cart (0)</SheetTitle>
          {itemCount > 0 ? (
            <>
              <div className="flex w-full flex-col pr-6">
                {/*TODO CART */}
                cart items
              </div>
              <div className="space-y-1.5 text-sm">
                <Separator />
                <div className="flex">
                  <span className="flex-1">Shipping Fee</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </>
          ) : (
            <div className="flex flex-col h-full items-center justify-center">
              <div
                className="relative h-60 w-60 mb-4 text-muted-foreground"
                aria-hidden="true"
              >
                <Image src="/hippo-empty-cart.png" alt="Empty cart" fill />
              </div>
              <div className="font-semibold">Your cart is empty</div>
              <SheetTrigger asChild>
                <Link
                  href="/products"
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "text-muted-foreground text-sm",
                  })}
                >
                  Add items to your cart checkout
                </Link>
              </SheetTrigger>
            </div>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
