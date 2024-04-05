"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { shirts } from "@/data";
import { Shirt } from "@/interfaces/interfaces";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface ContextProps {
  bag: Shirt[];
  targetShirt: Shirt;
  purchasedShirts: Shirt[];
  addShirtToBag: (shirtId: string) => void;
  removeShirtFromBag: (shirtId: string) => void;
  getTargetShirtId: (shirtId: string) => void;
  finalizePurchase: () => void;
}

export const Context = createContext({} as ContextProps);

interface ProviderProps {
  children: React.ReactNode;
}

export function ContextProvider({ children }: ProviderProps) {
  // FUNÇÕES E CONSTANTES

  const router = useRouter();

  const [bag, setBag] = useState([] as Shirt[]);
  const [targetShirt, setTargetShirt] = useState({} as Shirt);
  const [purchasedShirts, setPurchasedShirts] = useState([] as Shirt[]);

  const increaseShirtAmount = (shirtId: string) => {
    const newBag = bag.map((item) =>
      item.id === shirtId ? { ...item, amount: item.amount + 1 } : item
    );

    setBag(newBag);
  };

  const addShirtToBag = (shirtId: string) => {
    const shirt = shirts.find((item) => item.id === shirtId);
    const shirtExists = bag.find((item) => item.name === shirt?.name);

    shirtExists
      ? increaseShirtAmount(shirtExists.id)
      : shirt && setBag([...bag, shirt]);

    toast("Camiseta adicionada a sacola");
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

  const getTargetShirtId = (shirtId: string) => {
    const shirt = shirts.find((item) => item.id === shirtId);

    shirt ? setTargetShirt(shirt) : redirect("/");
  };

  const finalizePurchase = () => {
    bag.length > 0 ? setPurchasedShirts(bag) : redirect("/");
    setBag([]);
    router.push("/success");
  };

  useEffect(() => {
    const storedBag = localStorage.getItem("bag");
    storedBag && setBag(JSON.parse(storedBag));
  }, []);

  useEffect(() => {
    bag.length > 0
      ? localStorage.setItem("bag", JSON.stringify(bag))
      : localStorage.removeItem("bag");
  }, [bag]);

  return (
    <Context.Provider
      value={{
        bag,
        targetShirt,
        purchasedShirts,
        addShirtToBag,
        removeShirtFromBag,
        getTargetShirtId,
        finalizePurchase,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useMyContext = () => {
  return useContext(Context);
};
