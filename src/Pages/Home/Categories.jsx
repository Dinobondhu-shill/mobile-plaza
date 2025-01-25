import React, { useState } from "react";

const Categories = () => {
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { name: "Smart Phones", photo: "/public/category-64e10e1f43766.png" },
    { name: "Used Mobile", photo: "/public/category-65455791f2f17.jfif" },
    { name: "Smartwatches", photo: "/public/category-667806548f97a.png" },
    { name: "TWS", photo: "/public/category-667884978504e.webp" },
    { name: "Bluetooth Speaker", photo: "/public/category-667884dfb51aa.webp" },
    { name: "Mouse", photo: "/public/category-667886a8b4077.webp" },
    { name: "Cable", photo: "/public/category-667886dcf1ce2.webp" },
    { name: "Kitchen Accessories", photo: "/public/category-667887380c6bd (1).webp" },
    { name: "WiFi Router", photo: "/public/category-667887380c6bd.webp" },
    { name: "Headphone", photo: "/public/category-66788786db11f.webp" },
    { name: "Bluetooth Headphone", photo: "/public/category-6678881313d4b.webp" },
    { name: "Watches", photo: "/public/category-6678894e65221.png" },
    { name: "Keyboard", photo: "/public/category-66788adeb5c39.webp" },
    { name: "Microphone", photo: "/public/category-66788adeb5c39.webp" },
    { name: "Watch Strap", photo: "/public/category-66788b0262f24.webp" },
    { name: "Rechargeable Fan", photo: "/public/category-66788b0262f24.webp" },
    { name: "Neckband", photo: "/public/category-667e56b51d547.png" },
    { name: "Mobile Charger", photo: "/public/category-66788bd51bb5b.png" },
    { name: "Tripod", photo: "/public/category-66788bd51bb5b.png" },
    { name: "Ring Light", photo: "/public/category-66788b51831b0.webp" },
    { name: "Button Mobile", photo: "/public/category-66788b2a5f500.webp" },
    { name: "LED Light", photo: "/public/category-66788b0262f24.webp" },
    { name: "Power bank🔋", photo: "/public/category-6678894e65221.png" },
  ];

  return (
    <div className="px-4 flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-center my-5">Categories</h3>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {showAll
          ? categories.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-2 bg-gray-100 rounded-2xl text-center"
              >
                <img src={item.photo} alt={item.name} className="w-8 h-8" />
                <h4 className="text-sm font-medium">{item.name}</h4>
              </div>
            ))
          : categories.slice(0, 15).map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-2 bg-gray-100 rounded-2xl text-center"
              >
                <img src={item.photo} alt={item.name} className="w-8 h-8" />
                <h4 className="text-sm font-medium">{item.name}</h4>
              </div>
            ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="px-4 py-2 rounded-full text-center text-white bg-blue-400 my-5"
      >
       {
        showAll ? "Show Less" : "Show All"
       }
      </button>
    </div>
  );
};

export default Categories;
