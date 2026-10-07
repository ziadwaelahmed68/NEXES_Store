// src/api/mockProducts.ts

export const products = [
  { id: 1, name: "iPhone 15 Pro Max", price: 60000, category: "Mobile" },
  { id: 2, name: "MacBook Pro M3", price: 120000, category: "Laptop" },
  { id: 3, name: "Sony WH-1000XM5", price: 15000, category: "Audio" },
  { id: 4, name: "Samsung Galaxy S24 Ultra", price: 55000, category: "Mobile" }
];

// دالة وهمية بتعمل محاكاة لطلب API بياخد نص ثانية
export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); 
  });
};