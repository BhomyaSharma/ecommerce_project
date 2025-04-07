const API_BASE_URL = 'http://localhost:3000/api/product_details';

export const fetchProductsByCategory = async (categoryName) => {
  try {
    const response = await fetch(`${API_BASE_URL}/category/${categoryName}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (err) {
    console.error("API error:", err);
    return [];
  }
};
