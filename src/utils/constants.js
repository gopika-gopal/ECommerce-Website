export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const BANNER_IMG = "https://brownliving.in/cdn/shop/collections/All_Products_for_Earth_Lovers_1000x.jpg?v=1706295995"