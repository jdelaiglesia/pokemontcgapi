import { getCard } from "./utils/apiGet";
import Image from "next/image";

export default async function HomePage() {
  const cardId = "base1-1";
  const card = await getCard(cardId);

  return (
    <div className="flex">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Check every Pokémon TCG card</h1>
        </div>
        <div className="flex-1 p-4">
          <p>
            In this site you can check cards and their attacks, PokéPowers,
            specific information, average prices and more!
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center p-4">
        {card && (
          <Image
            src={card.images.large}
            alt={card.name}
            width={300}
            height={420}
          />
        )}
      </div>
    </div>
  );
}
