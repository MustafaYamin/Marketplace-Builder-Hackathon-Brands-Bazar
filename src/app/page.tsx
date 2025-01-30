"use client";
import HeroSection from "./components/herosec";
import BestSeller from "./components/featuredproduct";
import { useEffect, useState } from "react";
import NeuralUni from "./components/neural";

const Page = () => {
  const [bestSellerComponent, setBestSellerComponent] =
    useState<JSX.Element | null>(null);

  useEffect(() => {
    const fetchBestSeller = async () => {
      const component = await BestSeller();
      setBestSellerComponent(component);
    };
    // {bestSellerComponent}
    fetchBestSeller();
  }, [bestSellerComponent]);
  return (
    <div>
      <HeroSection />
      <div className="mt-7 lg::mt-0">{bestSellerComponent}</div>

      <NeuralUni />
    </div>
  );
};

export default Page;
