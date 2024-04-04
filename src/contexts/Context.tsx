"use client";

import { createContext, useContext, useState } from "react";
import { shirts } from "@/data";
import { Shirt } from "@/interfaces/interfaces";

interface ContextProps {
  bag: Shirt[];
  addShirtToBag: (shirtId: string) => void;
  removeShirtFromBag: (shirtId: string) => void;
}

export const Context = createContext({} as ContextProps);

interface ProviderProps {
  children: React.ReactNode;
}

export function ContextProvider({ children }: ProviderProps) {
  // FUNÇÕES E CONSTANTES

  const [bag, setBag] = useState([] as Shirt[]);

  const increaseShirtAmount = (shirtId: string) => {
    const newBag = bag.map((item) =>
      item.id === shirtId ? { ...item, amount: item.amount + 1 } : item
    );

    setBag(newBag);
  };

  const addShirtToBag = (shirtId: string) => {
    const shirt = shirts.find((item) => item.id === shirtId);
    const shirtExists = bag.find((item) => item.id === shirtId);

    shirtExists ? increaseShirtAmount(shirtId) : setBag([...bag, shirt!]);
  };

  const decreaseShirtAmount = (shirtId: string) => {
    const newBag = bag.map((item) =>
      item.id === shirtId ? { ...item, amount: item.amount - 1 } : item
    );

    setBag(newBag);
  };

  const removeShirtFromBag = (shirtId: string) => {
    const shirt = bag.find((item) => item.id === shirtId);
    const newBag = bag.filter((item) => item.id !== shirtId);

    shirt && shirt.amount > 1 ? decreaseShirtAmount(shirtId) : setBag(newBag);
  };

  return (
    <Context.Provider value={{ bag, addShirtToBag, removeShirtFromBag }}>
      {children}
    </Context.Provider>
  );
}

export const useMyContext = () => {
  return useContext(Context);
};
