import Image from "next/image";

export default function Header() {
  return (
    <div className="w-screen fixed z-10 flex justify-between items-center px-16 py-4  h-auto">
      <div className="w-16 h-16  relative">
        <Image src='/images/Logo.png' priority alt="Logo" fill sizes="cover"/> 
      </div>
      <div className="flex gap-13 justify-between items-center">
        <span className="text-xl text-paper/80">About</span>
        <span className="text-xl text-paper/80">Services</span>
        <span className="text-xl text-paper/80">Pricing</span>
        <button className="bg-pink-eraser rounded-3xl animate-background-animation from-pink-eraser via-pink-200 to-pink-300 text-2xl  px-7 py-2">Contact</button>
      </div>
    </div>
  )
}

