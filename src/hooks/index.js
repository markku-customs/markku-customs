import useSWR from 'swr';

const API_BASE = '/.netlify/functions/';

export const useProducts = () => {
  const { data: products, error } = useSWR(`${API_BASE}getProducts`);

  return { products, error };
};

export const useReviews = () => {
  const { data: reviews, error } = useSWR(`${API_BASE}getReviews`);

  return { reviews, error };
};

export const usePartners = () => {
  const { data: partners, error } = useSWR(`${API_BASE}getPartners`);

  return { partners, error };
};

export const useProduct = (id) => {
  const { data: product, error } = useSWR(`${API_BASE}getProduct?id=${id}`);

  return { product, error };
};

export const usePage = (slug) => {
  const { data: page, error } = useSWR(`${API_BASE}getPage?slug=${slug}`);

  return { page, error };
};
