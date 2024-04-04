import tshirt1 from "../assets/tshirt1.png";
import tshirt2 from "../assets/tshirt2.png";
import tshirt3 from "../assets/tshirt3.png";
import tshirt4 from "../assets/tshirt4.png";
import tshirt5 from "../assets/tshirt5.png";
import { v4 as uuidv4 } from "uuid";

export const shirts = [
  {
    id: uuidv4(),
    name: "Beyond the Limits",
    price: 89.9,
    amount: 1,
    img: tshirt1,
  },
  {
    id: uuidv4(),
    name: "Explorer",
    price: 79.9,
    amount: 1,
    img: tshirt2,
  },
  {
    id: uuidv4(),
    name: "Explorer on Fire",
    price: 79.9,
    amount: 1,
    img: tshirt3,
  },
  {
    id: uuidv4(),
    name: "Ignite",
    price: 59.9,
    amount: 1,
    img: tshirt4,
  },
  {
    id: uuidv4(),
    name: "Igniter",
    price: 69.9,
    amount: 1,
    img: tshirt5,
  },
];
