"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect } from "react";
import { useMyContext } from "@/contexts/Context";

interface OverviewProps {
  params: { id: string };
}

export default function Overview({ params }: OverviewProps) {
  const { getTargetShirtId, targetShirt, addShirtToBag } = useMyContext();

  useEffect(() => {
    getTargetShirtId(params.id);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 -mt-10 lg:mt-0">
      <figure className="from-emerald-800 to-sky-800">
        <AspectRatio ratio={16 / 15.5} className="bg-gradient-to-b rounded-lg">
          <Image src={targetShirt.img} alt="" className="h-full" />
        </AspectRatio>
      </figure>

      <div className="flex flex-col justify-between px-0 lg:pl-8 py-1">
        <main className="flex flex-col gap-6">
          <h1 className="text-3xl">{targetShirt.name}</h1>
          <h2 className="text-2xl">R$ {targetShirt.price}0</h2>
          <p className="text-muted-foreground leading-8">
            {targetShirt.description}
          </p>
        </main>

        <Button
          onClick={() => addShirtToBag(targetShirt.id)}
          className="my-8 lg:my-0"
        >
          Adicionar a sacola
        </Button>
      </div>
    </div>
  );
}
