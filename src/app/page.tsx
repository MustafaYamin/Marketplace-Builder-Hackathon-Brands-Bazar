'use client';
import HeroSection from "./components/herosec";
import EditorsPick from "./components/editorspick";
import BestSeller from "./components/featuredproduct";
import { useEffect, useState } from "react";
import VirtualProducts from "./components/virtualproduct";
import NeuralUni from "./components/neural";



  const Page = () => {
    const [bestSellerComponent, setBestSellerComponent] = useState<JSX.Element | null>(null);

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

      <EditorsPick />

      {bestSellerComponent}

      <VirtualProducts />

      <NeuralUni />


     
    </div>
  );
};

export default Page;
