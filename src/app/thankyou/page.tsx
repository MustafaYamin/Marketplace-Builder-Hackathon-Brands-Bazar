"use client";
import Checkout from "../components/checkOut";
import BestSeller from "../components/featuredproduct";
import { useState, useEffect } from "react";

export default function Thankyou() {
  const [bestSellerComponent, setBestSellerComponent] =
    useState<JSX.Element | null>(null);
  useEffect(() => {
    const fetchBestSeller = async () => {
      const component = await BestSeller();
      setBestSellerComponent(component);
    };
    fetchBestSeller();
  }, []);
  return (
    <div>
      <Checkout />
      {bestSellerComponent}
    </div>
  );
}
