import Image from "next/image";
import Herosection from "@/components/herosection";
import Promotions from "@/components/promotions";
import ProductList from "@/components/productList";
import FeaturesSection from "@/components/featuresSection";
import NewsLetter from "@/components/newsLetter";
import Footer from "@/components/footer";
import CartSideBar from "@/components/CartSideBar";

export default function Home() {
  return (
    <main className="">
      <Herosection />
      <div className="text-center flex flex-col gap-5 mb-20 mt-20">
        <h1 className="text-blue-500 text-sm font-bold tracking-widest">
          PROMOTIONS
        </h1>
        <h1 className="font-bold text-4xl">Our Promotions Events</h1>
      </div>
      <Promotions />

      <div className="text-center flex flex-col gap-5 mb-20 mt-20">
        <h1 className="text-blue-500 text-sm font-bold tracking-widest">
          PRODUCTS
        </h1>
        <h1 className="font-bold text-4xl">Check What We Have</h1>
      </div>

      <ProductList />
      <div className="flex flex-row mt-20">
        <h1 className=" flex-1 text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {" "}
          Unique and Authentic Vintage Designer Jewellery
        </h1>
        <h1 className=" flex-1 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {" "}
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <FeaturesSection />
      <NewsLetter />
    </main>
  );
}
