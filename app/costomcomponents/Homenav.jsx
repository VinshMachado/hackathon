import { FaBars } from "react-icons/fa";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Homenav = () => {
  return (
    <div className="h-52 w-full font-heading bg-black flex  items-center">
      <SidebarTrigger className="bg-black text-white text-xl rounded px-4 py-2  " />

      <h1 className="font-heading pl-10 text-white text-6xl">Transsact</h1>
    </div>
  );
};
