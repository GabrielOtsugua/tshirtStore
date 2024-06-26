import { StaticImageData } from "next/image";

export interface Shirt {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  img: StaticImageData;
}
