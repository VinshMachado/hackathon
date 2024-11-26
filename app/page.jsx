import Image from "next/image";
import styles from "./page.module.css";
import { Homenav } from "./costomcomponents/Homenav";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Payment from "./costomcomponents/Payment";
import Yettopay from "./costomcomponents/Paid";

export default function Home() {
  return (
    <>
      <Payment />
    </>
  );
}
