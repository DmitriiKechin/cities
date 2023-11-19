export const normalizeCity = (city: string) => {
  const cyrillicRegex = /[\u0400-\u04FF]+/g;
  return (
    city.toLowerCase().replace(/ё/g, 'е').match(cyrillicRegex)?.join('') || ''
  );
};
