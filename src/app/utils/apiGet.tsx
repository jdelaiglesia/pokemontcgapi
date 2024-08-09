export const getCard = async (card: any) => {
  const response = await fetch(`https://api.pokemontcg.io/v2/cards/${card}`);
  const data = await response.json();
  return data.data;
};

export const getSet = async (set: any) => {
  const response = await fetch(
    `https://api.pokemontcg.io/v2/cards?q=set.id:${set}`
  );
  const data = await response.json();
  return data.data;
};
export const getAllSets = async () => {
  const response = await fetch(`https://api.pokemontcg.io/v2/sets/`);
  const data = await response.json();
  return data.data;
};
