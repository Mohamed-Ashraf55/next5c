import Image from "next/image";





export default function Home() {

  return (
     <main  className="flex  min-h-screen  items-center justify-center bg-[#d5e1ef]  p-4 font-sans">
      <div  className="bg-white rounded-xl  w-full  max-w-[320px]  p-7 text-center  shadow-lg transition-shadow  duration-300 hover:shadow-xl">
        <div className=" relative   overflow-hidden  rounded-xl bg-[#2c7dfa] aspect-square w-full">
         <Image
            src="/image-qr-code.png"  alt="Frontend Mentor QR Code"  fill  className="object-cover p-4"  priority
          />
        </div>
        <div className="px-4 py-4"  >
          <h1 className="text-[20px] font-bold leading-tight text-[#1f3251]">
            Improve your front-end skills by building projects
          </h1>
          <p className="mt-4 text-[15px] font-normal leading-relaxed text-[#7b879d]">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>


        </div>

      </div>
     </main>
  );
}
