"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMyContext } from "@/contexts/Context";
import { useEffect } from "react";

export default function Success() {
  const { purchasedShirts, finalizePurchase } = useMyContext();

  const router = useRouter();
  const visualizeShirts = purchasedShirts.slice(0, 3);
  const invisibelShirts = purchasedShirts.slice(3);
  const invisibleAmounts = invisibelShirts.reduce(
    (total, item) => total + item.amount,
    0
  );

  useEffect(() => {
    finalizePurchase();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-12">
        <figure className="relative flex justify-between gap-4">
          {visualizeShirts.map((item) => (
            <div
              key={item.id}
              className="relative w-32 h-32 bg-gradient-to-b from-emerald-800 to-sky-800 rounded-full border border-foreground -ml-16 first:m-0"
            >
              <span className="absolute -top-3 left-14 h-5 w-5 flex items-center justify-center text-primary text-xs bg-secondary rounded-full border-2 border-background">
                {item.amount}
              </span>
              <Image src={item.img} alt="" />
            </div>
          ))}
          <span
            hidden={invisibelShirts.length > 0 ? false : true}
            className=" absolute bg-muted px-4 rounded-full bottom-0 -right-3"
          >
            +{invisibleAmounts}
          </span>
        </figure>

        <main className="max-w-96">
          <h2 className="text-center text-2xl mb-4">Compra efetuada!</h2>
          <p className="text-center text-lg text-muted-foreground">
            Booaa! Em pouco tempo sua compra estará a caminho da sua casa, no
            além...
          </p>
        </main>

        <Button onClick={() => router.push("/")} variant={"ghost"}>
          Voltar ao catálogo
        </Button>
      </div>
    </div>
  );
}
