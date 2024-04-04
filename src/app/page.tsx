"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { shirts } from "@/data";
import { useMyContext } from "@/contexts/Context";

export default function Home() {
  const router = useRouter();

  const { addShirtToBag } = useMyContext();

  return (
    <>
      <Carousel className="w-full box-border">
        <CarouselContent className="-ml-1">
          {shirts.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="bg-gradient-to-b from-emerald-800 to-sky-800 rounded-lg">
                    <AspectRatio ratio={9 / 9}>
                      <Image
                        onClick={() => router.push("/overview")}
                        src={item.img}
                        alt=""
                      />
                    </AspectRatio>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-black bg-opacity-20">
                      <span>
                        <p className="text-primary">{item.name}</p>
                        <p>R$ {item.price}0</p>
                      </span>
                      <Button
                        onClick={() => addShirtToBag(item.id)}
                        variant={"ghost"}
                        className="h-auto p-2"
                      >
                        <ShoppingBag className="text-foreground" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
