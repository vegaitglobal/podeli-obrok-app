export const getAddresses = async (addressInput) => {
  return fetch(`${process.env.API_BASE_URL}/geo-search?q=${addressInput}`);
};
