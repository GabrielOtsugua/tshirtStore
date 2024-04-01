import { Button } from "@/components/ui/button";

export default function Overview() {
  return (
    <div className="min-h-96 grid grid-cols-2">
      <figure className="bg-secondary rounded-lg"></figure>

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
