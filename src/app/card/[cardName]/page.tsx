import { getCard } from "@/app/utils/apiGet";

export default async function CardPage({
  params,
}: {
  params: { cardName: string };
}) {
  const card = await getCard(params.cardName);

  return (
    <div>
      <h1>{card.name}</h1>
      <h2>{card.set.name}</h2>
    </div>
  );
}
