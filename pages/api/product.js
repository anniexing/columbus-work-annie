const BASE_URL = "http://localhost:3001";

export const fetchProducts = async () => {
  const url = `${BASE_URL}/products`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
