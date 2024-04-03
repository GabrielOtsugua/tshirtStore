"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import tshirt2 from "../../assets/tshirt2.png";

export default function Success() {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-12">
        <figure className="flex justify-between gap-4">
          <div className="w-32 h-32 bg-gradient-to-b from-emerald-800 to-sky-800 rounded-full border border-foreground">
            <Image src={tshirt2} alt="" />
          </div>
          <div className="w-32 h-32 bg-gradient-to-b from-emerald-800 to-sky-800 rounded-full border border-foreground -ml-16">
            <Image src={tshirt2} alt="" />
          </div>
          <div className="w-32 h-32 bg-gradient-to-b from-emerald-800 to-sky-800 rounded-full border border-foreground -ml-16">
            <Image src={tshirt2} alt="" />
          </div>
        </figure>

        <main className="max-w-96">
          <h2 className="text-center text-2xl mb-4">Compra efetuada!</h2>
          <p className="text-center text-lg text-muted-foreground">
            Boa Diego Fernandes! Sua compra de 3 camisetas já está a caminho da
            sua casa.
          </p>
        </main>

        <Button onClick={() => router.push("/")} variant={"ghost"}>
          Voltar ao catálogo
        </Button>
      </div>
    </div>
  );
}
