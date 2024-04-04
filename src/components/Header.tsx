"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import Image from "next/image";
import { useMyContext } from "@/contexts/Context";

export function Header() {
  const { bag, removeShirtFromBag } = useMyContext();

  const totalPrice = bag
    .reduce((total, item) => total + item.price * item.amount, 0)
    .toFixed(2);

  const totalItens = bag.reduce((total, item) => total + item.amount, 0);

  return (
    <header className="fixed z-10 w-full backdrop-blur-sm">
      <nav className="flex justify-between items-center py-8 w-[80%] m-auto">
        <div className="flex gap-2">
          <p>
            <span className="text-primary">Tshirt</span> Store
          </p>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"secondary"} className="h-auto p-2">
              <ShoppingBag className="text-muted-foreground" />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-[90%] text-sm md:text-base flex flex-col justify-between">
            <SheetHeader className="mb-4">
              <SheetTitle>Sacola de compras</SheetTitle>
            </SheetHeader>

            <ScrollArea className="grow">
              <div className="flex flex-col gap-4">
                {bag.map((item) => (
                  <div key={item.id} className="grid grid-cols-3 gap-4">
                    <figure className="col-span-1 rounded-lg bg-gradient-to-b from-emerald-800 to-sky-800">
                      <Image src={item.img} alt="" />
                    </figure>
                    <main className="col-span-2 flex flex-col gap-2">
                      <p>{item.name}</p>
                      <p>R$ {item.price}0</p>
                      <span className="flex gap-2">
                        <span className="flex items-center px-4 border rounded-md">
                          {item.amount}
                        </span>
                        <Button
                          onClick={() => removeShirtFromBag(item.id)}
                          variant={"outline"}
                          className="w-20 h-auto"
                        >
                          Remover
                        </Button>
                      </span>
                    </main>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <SheetFooter className="block mt-4">
              <div>
                <span className="flex justify-between items-center mb-2 font-extralight">
                  <p>Quantidade</p>
                  <p>
                    {totalItens}{" "}
                    {totalItens > 0
                      ? totalItens > 1
                        ? "itens"
                        : "item"
                      : "itens"}
                  </p>
                </span>
                <span className="flex justify-between items-center mb-4 font-bold">
                  <p>Valor total</p>
                  <p>R$ {totalPrice}</p>
                </span>
                <SheetClose asChild>
                  <Button className="w-full">Finalizar compra</Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
