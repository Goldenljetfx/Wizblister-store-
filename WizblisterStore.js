
// Wizblister Store - Dropshipping Online Store with Phantom Wallet Integration
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export default function WizblisterStore() {
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 29.99,
      image: "https://via.placeholder.com/300x200?text=Wireless+Earbuds",
      description: "Bluetooth 5.0 earbuds with noise cancellation."
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 49.99,
      image: "https://via.placeholder.com/300x200?text=Fitness+Watch",
      description: "Track your health and stay fit effortlessly."
    },
    {
      id: 3,
      name: "Portable Blender",
      price: 24.99,
      image: "https://via.placeholder.com/300x200?text=Portable+Blender",
      description: "USB rechargeable blender for smoothies on the go."
    }
  ];

  const phantomWalletAddress = "FK2ZNo9Pd37U3PP6wLn5fijkZuWd9kjmFM9rbaYsDNRY";

  const handlePhantomPay = (amount) => {
    const solAmount = (amount / 150).toFixed(4); // Example rate: 1 SOL = $150
    const link = `https://phantom.app/ul/browse/send?recipient=${phantomWalletAddress}&amount=${solAmount}&reference=WIZPAY&label=Wizblister+Store&message=Payment+for+Product`;
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="bg-red-600 text-white p-6 text-3xl font-bold text-center shadow-md">
        Wizblister Store
      </header>

      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="rounded-2xl shadow-lg">
            <CardContent className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-red-600">${product.price}</span>
                <Button className="bg-red-600 hover:bg-red-700" onClick={() => handlePhantomPay(product.price)}>
                  <ShoppingCart className="mr-2" /> Pay with Phantom
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>

      <section className="p-6 bg-gray-50 text-center">
        <h3 className="text-xl font-semibold mb-2">Crypto Checkout Available</h3>
        <p className="text-gray-600 mb-4">Pay easily using your preferred crypto wallet through secure channels.</p>
        <Button className="bg-purple-600 text-white hover:bg-purple-700" onClick={() => handlePhantomPay(0)}>
          Send Custom Amount with Phantom
        </Button>
      </section>

      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-500">
        Wizblister Store &copy; 2025. All rights reserved.
      </footer>
    </div>
  );
}
