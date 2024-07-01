import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden  relative px-24">
      <div class="absolute inset-0 w-screen  -top-full flex items-center left-2/4  justify-center">
        <div class="bg-main w-96 h-52 rounded-full filter blur-3xl"></div>
      </div>
      <div class="absolute inset-0 w-screen -top-44   flex items-center -left-2/4  justify-center">
        <div class="bg-main w-96 h-52 rounded-full filter blur-3xl"></div>
      </div>
      <div class="absolute inset-0 w-screen top-80   flex items-center left-1/4  justify-center">
        <div class="bg-main w-52 h-52 rounded-full filter blur-3xl"></div>
      </div>
      <div class="relative z-10 text-center">
        
      </div>
    </main>
  );
}
