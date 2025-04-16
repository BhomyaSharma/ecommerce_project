const API_BASE_URL = 'http://localhost:3000/api/categories';

export const fetchCategories = async (type = '') => {
  try {
    const url = type ? `${API_BASE_URL}?type=${encodeURIComponent(type)}` : API_BASE_URL;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
