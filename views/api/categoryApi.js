const API_BASE_URL = 'http://localhost:3000/api/categories'; // Or whatever your backend route is

export const fetchCategories = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
