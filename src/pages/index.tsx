import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/packages/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="app-container flex w-full h-[100vh]">
      <aside className="app-navigation">
        <NavBar />
      </aside>
      <div className="app-content">CONTENT</div>
    </div>
  );
}
