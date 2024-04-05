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
    description:
      "Camiseta Beyond the Limits: Adentre o universo desconhecido com esta camiseta estonteante. Com sua representação artística de uma galáxia abstrata em cores vibrantes e detalhes hipnotizantes, esta camiseta é perfeita para os amantes do cosmos que buscam expressar sua paixão pelo desconhecido.",
    price: 89.9,
    amount: 1,
    img: tshirt1,
  },
  {
    id: uuidv4(),
    name: "Explorer",
    description:
      "Camiseta Explorer: Vista-se para a aventura intergaláctica com esta camiseta inspirada na exploração espacial. Apresentando um design que retrata naves espaciais atravessando o vasto cosmos e planetas distantes, esta camiseta é ideal para aqueles que sonham em explorar além dos confins da Terra.",
    price: 79.9,
    amount: 1,
    img: tshirt2,
  },
  {
    id: uuidv4(),
    name: "Explorer on Fire",
    description:
      "Camiseta Explorer on Fire: Celebre a coragem dos pioneiros do espaço com esta camiseta marcante. Com um impressionante cosmonauta flutuando em meio a estrelas cadentes e nebulosas brilhantes, esta camiseta é uma homenagem aos heróis do espaço e uma declaração de admiração pelo desconhecido.",
    price: 79.9,
    amount: 1,
    img: tshirt3,
  },
  {
    id: uuidv4(),
    name: "Ignite",
    description:
      "Camiseta Ignite: Envolva-se na beleza etérea das nebulosas com esta camiseta fascinante. Com seu design intricado que retrata uma nebulosa em espiral em tons de azul e violeta, esta camiseta é uma representação deslumbrante da vastidão e da beleza do universo.",
    price: 59.9,
    amount: 1,
    img: tshirt4,
  },
  {
    id: uuidv4(),
    name: "Igniter",
    description:
      "Camiseta Igniter: Deixe sua imaginação voar alto com esta camiseta encantadora. Apresentando um astronauta solitário flutuando no espaço sideral, esta camiseta evoca um senso de maravilha e aventura, lembrando-nos de que os limites do espaço são apenas o começo das nossas jornadas além da Terra.",
    price: 69.9,
    amount: 1,
    img: tshirt5,
  },
];
