const API_URL = process.env.EXPO_public_API_URL_PRODUCTS;

export async function listProducts() {
  const response = await fetch(API_URL);
  const data = await response.json();    
}