import Feature from "@/components/Feature";
import Choose from "@/components/home/Choose";
import Hero from "@/components/home/Hero";
import Jurney from "@/components/home/Jurney";
import Travels from "@/components/home/Travels";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Feature></Feature>
      <Choose></Choose>
      <Travels></Travels>
      <Jurney></Jurney>
    </div>
  );
}
