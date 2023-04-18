import Image from "next/image";

import bennerImage from "@/public/assets/img/Benner.jpg";
import Link from "next/link";

export default function index() {
  return (
    <div className="relative min-h-[100vh!important]">
      <Image
        src={bennerImage}
        alt="Benner"
        fill
        quality={100}
        className="object-cover object-center"
        loading="lazy"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
        <div className="container mx-auto flex flex-col items-center justify-center h-full gap-5">
          <h1 className="text-4xl font-bold text-center text-white my_font">
            Welcome to GTM Gallery
          </h1>
          <p className="text-2xl font-bold text-center text-white my_font">
            "We are a group against losers."
          </p>
          <Link href="/gallery">
            <button className="bn">let's go</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
