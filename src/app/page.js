import Image from "next/image";
import MainSection from "@/components/Main/Index";
import GetItems from "@/components/Items/Index";

export default function Home() {
  return (
    <main className="mainDiv"  style={{width:"100%"}}>
      <MainSection />
      <GetItems />
    </main>
  );
}
