import HeroSection from "./components/herosec";
import EditorsPick from "./components/editorspick";
import BestSeller from "./components/featuredproduct";
import VirtualProducts from "./components/virtualproduct";
import NeuralUni from "./components/neural";
import Featured from "./components/featured";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <EditorsPick />

      <BestSeller />

      <VirtualProducts />

      <NeuralUni />

      <Featured />

      <Footer />
    </div>
  );
}
