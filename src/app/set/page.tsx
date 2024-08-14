import { getAllSets } from "../utils/apiGet";
import Image from "next/image";
import Link from "next/link";

export default async function Sets() {
  const sets = await getAllSets();
  return (
    <>
      <div className="flex flex-row flex-wrap">
        {sets.map((set: any, index: any) => (
          <div className="flex p-2 w-1/6" key={index}>
            <div className="flex w-full justify-center rounded items-center flex-col max-w-sm overflow-hidden shadow-lg bg-white p-2">
              <div className="w-auto h-16 overflow-hidden">
                <Image
                  className="object-contain w-full h-full"
                  src={set.images.symbol}
                  alt={`${set.name} logo`}
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex items-center px-6 py-4 h-full">
                <p className="font-bold text-xl text-wrap text-center">
                  {set.name}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <Link
                  href={"/set/" + set.id}
                  className="bg-blue-500 ease-in-out duration-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Ver cartas
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
