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
import { MousePointerClick, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { shirts } from "@/data";
import { useMyContext } from "@/contexts/Context";

export default function Home() {
  const { addShirtToBag } = useMyContext();

  const router = useRouter();

  return (
    <div className="flex md:block justify-center items-center">
      <Carousel className="w-[85%] md:w-full">
        <CarouselContent className="-ml-1">
          {shirts.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="relative bg-gradient-to-b from-emerald-800 to-sky-800 rounded-lg">
                    <MousePointerClick className="absolute z-20 left-6 top-6" />

                    <AspectRatio ratio={9 / 9}>
                      <Image
                        onClick={() => router.push(`/overview/${item.id}`)}
                        src={item.img}
                        alt=""
                        className="cursor-pointer"
                      />
                    </AspectRatio>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-black bg-opacity-20 text-sm">
                      <span>
                        <p className="text-primary">{item.name}</p>
                        <p>R$ {item.price}0</p>
                      </span>
                      <Button
                        onClick={() => addShirtToBag(item.id)}
                        variant={"ghost"}
                        className="h-auto p-2"
                      >
                        <ShoppingBag className="text-foreground w-5 md:w-auto" />
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
    </div>
  );
}
