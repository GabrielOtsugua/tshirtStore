"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Success() {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-12">
        <figure className="flex justify-between gap-4">
          <div className="w-32 h-32 bg-secondary rounded-full"></div>
          <div className="w-32 h-32 bg-primary rounded-full -ml-12"></div>
          <div className="w-32 h-32 bg-secondary rounded-full -ml-12"></div>
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
