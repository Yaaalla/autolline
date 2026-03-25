// Supabase Configuration
const supabaseUrl = 'https://ayxwunorvigchdklsywv.supabase.co';
// Please add your Supabase Anon Key here
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5eHd1bm9ydmlnY2hka2xzeXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzOTE1NTEsImV4cCI6MjA4OTk2NzU1MX0.ypAEIm41egCnR7CH5wI8itTSUEQZ8Plw3zCEEKaeKUE'; 

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Image Optimization Helper
export const getOptimizedUrl = (url, { width, height, quality = 80, format = 'webp' } = {}) => {
    if (!url || !url.includes('supabase.co')) return url;
    // Note: Requires Supabase Image Transformation (Pro/Paid plan features)
    // If not available, it simply returns the original URL.
    return `${url}?width=${width || ''}&height=${height || ''}&quality=${quality}&format=${format}`;
};

// Caching Helper
export const getCachedData = (key, ttlInMinutes = 30) => {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > ttlInMinutes * 60000) {
        localStorage.removeItem(key);
        return null;
    }
    return data;
};

export const setCachedData = (key, data) => {
    localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
};

export const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>?/gm, '');
};

const EGP_RATE = 50; // Mock rate for reference

export const formatPrice = (price) => {
    if (price === undefined || price === null) return 'السعر عند الطلب';
    return `${Number(price).toLocaleString('ar-EG')} ج.م`;
};
