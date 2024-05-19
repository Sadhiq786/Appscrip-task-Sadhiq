import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/Heading/Heading";
import ProductsSection from "@/components/products/ProductsSection";

export default function Home() {
  return (
    <main className={`${styles.main} mainDiv`}  style={{width:"100%"}}>
      <HeroSection/>
      <ProductsSection/>
    </main>
  );
}
