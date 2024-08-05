export const getCard = async (card: any) => {
  const response = await fetch(`https://api.pokemontcg.io/v2/cards/${card}`);
  const data = await response.json();
  return data.data;
};
