import Config from 'react-native-config';

const baseUrl = Config.API_BASE_URL;

export const getAddresses = async (addressInput) => {
  return fetch(`${baseUrl}/geo-search?q=${addressInput}`);
};
