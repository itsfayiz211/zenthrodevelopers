import React from "react";
import Navbar from "@/components/Navbar";
import OrderDashboard from "@/components/sections/OrderDashboard";
import Footer from "@/components/sections/Footer";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <OrderDashboard />
      </main>
      <Footer />
    </>
  );
}
