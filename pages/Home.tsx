import Card from "@/components/Card";
import Logout from "@/public/assets/img/Logout.png";
import Image from "next/image";

export default function Home() {
  if (typeof window !== "undefined") {
    const user = JSON.parse(sessionStorage.getItem("user") || "{}");
    if (!user.login) {
      window.location.href = "/Login";
    }
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-end">
        <button
          onClick={() => sessionStorage.removeItem("user")}
          className="ml-auto"
        >
          <Image src={Logout} alt="Logout" width={30} height={30} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 place-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
