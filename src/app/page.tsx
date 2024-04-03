"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import tshirt1 from "../assets/tshirt1.png";
import tshirt2 from "../assets/tshirt2.png";
import tshirt3 from "../assets/tshirt3.png";
import tshirt4 from "../assets/tshirt4.png";
import tshirt5 from "../assets/tshirt5.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const data = [
    {
      id: 1,
      name: "Beyond the Limits",
      price: 89.9,
      img: tshirt1,
    },
    {
      id: 2,
      name: "Explorer",
      price: 89.9,
      img: tshirt2,
    },
    {
      id: 3,
      name: "Explorer on Fire",
      price: 89.9,
      img: tshirt3,
    },
    {
      id: 4,
      name: "Ignite",
      price: 89.9,
      img: tshirt4,
    },
    {
      id: 5,
      name: "Igniter",
      price: 89.9,
      img: tshirt5,
    },
  ];

  return (
    <>
      <Carousel className="w-full box-border">
        <CarouselContent className="-ml-1">
          {data.map((item) => (
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
                        onClick={() => console.log("clicou")}
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
