import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3001"
});

export const fetch = async (url: string) => {
  const result = await client.get(url);
  return result.data;
};

export default client;
