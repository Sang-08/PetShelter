'use client';

import React, { useState } from 'react';

interface Product {
  name: string;
  price: string;
  oldPrice: string;
  image: string;
}

const products: Product[] = [
  {
    name: 'Chó Nâu',
    price: '19,000',
    oldPrice: '30,000',
    image: 'https://cdn.discordapp.com/attachments/1300816466379014237/1341972477491937364/image.png?ex=67b7f0c3&is=67b69f43&hm=d10754e58fbc6e97e1008ecb39bed6a26e55d96fc438f0928bc12b6dce29bde1&',
  },
  {
    name: 'Lịch Mèo',
    price: '19,000',
    oldPrice: '40,000',
    image: 'https://cdn.discordapp.com/attachments/1300816466379014237/1341975485122609242/image.png?ex=67b7f390&is=67b6a210&hm=c5a46df336bcfff1741239a7c71791a2e3c8ba634b554573bd362fdfdbdc7b88&',
  },
  {
    name: '3 Chú mèo',
    price: '109,000',
    oldPrice: '130,000',
    image: 'https://cdn.discordapp.com/attachments/1300816466379014237/1341978558746329188/image.png?ex=67b7f66d&is=67b6a4ed&hm=da8c033be7865bb5b0bf809f71a88454ff93c35d27469bd944488498403f61fe&',
  },
  {
    name: 'Mèo Trắng',
    price: '10,000',
    oldPrice: '20,000',
    image: 'https://cdn.discordapp.com/attachments/1300816466379014237/1341978727168610447/image.png?ex=67b7f695&is=67b6a515&hm=6507978f77feb8b0d6c21b2cdfd5d0fd6f58d2f945e8883602c7b0d51005760a&',
  },
  {
    name: 'Chân Gỗ',
    price: '59,000',
    oldPrice: '70,000',
    image: 'https://cdn.discordapp.com/attachments/1300816466379014237/1341978676283179090/image.png?ex=67b7f689&is=67b6a509&hm=0de7a5f1237386da803c8a30432cc9e541abb0cd9430b50dcba5ed11e136b01a&',
  },
  {
    name: 'Sen đá',
    price: '39,000',
    oldPrice: '70,000',
    image: 'https://hasem.vn/wp-content/uploads/2023/10/tieu-canh-smile-gift-2-600x600-1-450x450.jpeg',
  },
  {
    name: 'Ly ',
    price: '59,000',
    oldPrice: '70,000',
    image: 'https://cuutrodongvatdanang.com/uploads/photos/petup-shop-ban-hang-gay-quy-hoi-ctdv-da-nang-5.jpg',
  },
];

const ProductCard: React.FC<Product> = ({ name, price, oldPrice, image }) => (
  <div className="flex-shrink-0 w-64 bg-slate-100 rounded-lg shadow-md p-4">
    <img className="w-full h-40 object-cover rounded-md" src={image} alt={name} />
    <h3 className="text-lg font-semibold text-gray-900 mt-2">{name}</h3>
    <p className="text-sm text-gray-600">Mô tả</p>
    <div className="flex items-center justify-between mt-2">
      <span className="text-xl font-bold text-orange-500">{price} đ</span>
      <span className="text-sm text-gray-400 line-through">{oldPrice} đ</span>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 5) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 5 + products.length) % products.length);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-center space-x-4">
        <button
          onClick={prevProduct}
          className="px-2 py-1 bg-gray-600 text-white rounded-l-lg hover:bg-gray-700"
        >
          &#60;
        </button>

        {products.slice(currentIndex, currentIndex + 5).map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
          />
        ))}
        
        <button
          onClick={nextProduct}
          className="px-2 py-1 bg-gray-600 text-white rounded-r-lg hover:bg-gray-700"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default App;
