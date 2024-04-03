import { Button } from "@/components/ui/button";
import Image from "next/image";
import tshirt2 from "../../assets/tshirt2.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Overview() {
  return (
    <div className="grid grid-cols-2">
      <figure className="from-emerald-800 to-sky-800">
        <AspectRatio ratio={16 / 15.5} className="bg-gradient-to-b rounded-lg">
          <Image src={tshirt2} alt="" className="h-full" />
        </AspectRatio>
      </figure>

      <div className="flex flex-col justify-between px-16 py-1">
        <main className="flex flex-col gap-6">
          <h1 className="text-3xl">Camiseta Beyond the Limits</h1>
          <h2 className="text-2xl">R$ 79,90</h2>
          <p className="text-muted-foreground">
            Tempus fermentum eget lacus, quis ante. Potenti sit pharetra,
            ridiculus amet. Bibendum pretium arcu arcu eget viverra at metus
            donec hendrerit. Rhoncus, nunc, eu at ac.{" "}
          </p>
          <p className="text-muted-foreground">
            At massa, fermentum amet ornare cras tincidunt nunc tincidunt. Netus
            lorem nulla nulla mattis integer velit dictum proin nibh.
          </p>
        </main>

        <Button>Adicionar a sacola</Button>
      </div>
    </div>
  );
}
