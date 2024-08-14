import Image from "next/image";
import MainSection from "@/Components/Main/Index";
import GetItems from "@/Components/Items/Index";

export default function Home() {
  return (
    <main className="mainDiv"  style={{width:"100%"}}>
      <MainSection />
      <GetItems />
    </main>
  );
}
