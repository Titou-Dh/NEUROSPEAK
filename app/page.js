import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Prototype from "@/components/Prototype";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden  relative ">
      <div class="absolute inset-0 w-screen  -top-full flex items-center left-2/4  justify-center">
        <div class="bg-main w-96 h-52 rounded-full filter blur-3xl"></div>
      </div>
      <div class="absolute inset-0 w-screen -top-44   flex items-center -left-2/4  justify-center">
        <div class="bg-main w-96 h-52 rounded-full filter blur-3xl"></div>
      </div>
      <div class="absolute inset-0 w-screen -top-3/4 flex items-center left-64  justify-center">
        <div class="bg-main w-52 h-52 rounded-full filter blur-3xl"></div>
      </div>
      <div class="relative z-10 ">
        <NavBar />
        <Hero />
        <About />
        <Prototype />
        <Footer />
      </div>
    </main>
  );
}
