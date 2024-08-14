import { getCard } from "./utils/apiGet";
import Image from "next/image";

export default async function HomePage() {
  const cardId1 = "base1-1";
  const cardId2 = "base1-4";
  const cardId3 = "base1-8";
  const card1 = await getCard(cardId1);
  const card2 = await getCard(cardId2);
  const card3 = await getCard(cardId3);

  return (
    <div className="flex">
      <div className="flex flex-1 flex-col">
        <div className="flex-1 p-4 content-end place-self-end">
          <h1 className="text-2xl font-bold">Check every Pokémon TCG card</h1>
        </div>
        <div className="flex-1 p-4 text-right place-self-end">
          <p>
            In this site you can check cards and their attacks, PokéPowers,
            specific information, average prices and more!
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center p-4">
        {card1 && card2 && card3 && (
          <>
            <Image
              className="-rotate-12 w-64 -mr-32 ease-in-out duration-100 hover:w-72 rounded-lg"
              src={card1.images.large}
              alt={card1.name}
              width={300}
              height={420}
            />
            <Image
              className="z-50 ease-in-out duration-100 hover:w-80 rounded-lg"
              src={card2.images.large}
              alt={card2.name}
              width={300}
              height={420}
            />
            <Image
              className="rotate-12 w-64 -ml-32 ease-in-out duration-100 hover:w-72 rounded-lg"
              src={card3.images.large}
              alt={card3.name}
              width={300}
              height={420}
            />
          </>
        )}
      </div>
    </div>
  );
}
