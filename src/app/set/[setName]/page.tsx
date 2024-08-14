import { getSet } from "../../utils/apiGet";
import Image from "next/image";
import Link from "next/link";
export default async function SetPage({
  params,
}: {
  params: { setName: string };
}) {
  const set = await getSet(params.setName);

  return (
    <div className="p-3 flex flex-row flex-wrap justify-center">
      {set.map((card: any, index: any) => (
        <div key={index} className="m-2 relative group">
          <Image
            src={card.images.small}
            className="rounded-lg"
            alt={card.name + " card image"}
            width={250}
            height={250}
          />
          <Link href={"/card/" + card.id}>
            <div className="rounded-lg cursor-pointer absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-bold">{card.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
