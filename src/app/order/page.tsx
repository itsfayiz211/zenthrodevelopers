import React from "react";
import Navbar from "@/components/Navbar";
import OrderForm from "@/components/sections/OrderForm";
import Footer from "@/components/sections/Footer";

export default function OrderPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <OrderForm />
      </main>
      <Footer />
    </>
  );
}
