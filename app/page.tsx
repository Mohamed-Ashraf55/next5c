import Image from "next/image";





export default function Home() {

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#d5e1ef] p-4 font-sans">
      {/* الكارت الأبيض الخارجي */}
      <div className="w-full max-w-[320px] rounded-2xl bg-white p-4 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
        
        {/* حاوية الصورة الزرقاء */}
        <div className="relative overflow-hidden rounded-xl bg-[#2c7dfa] aspect-square w-full">
          <Image
            src="/image-qr-code.png" // تأكد من اسم ومسار الصورة في مجلد public
            alt="Frontend Mentor QR Code"
            fill
            className="object-cover p-4"
            priority
          />
        </div>

        {/* النصوص أسفل الصورة */}
        <div className="px-2 py-6">
          <h1 className="text-[22px] font-bold leading-tight text-[#1f3251]">
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
