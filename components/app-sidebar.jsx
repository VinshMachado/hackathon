import * as React from "react";
import { SidebarFooter } from "@/components/ui/sidebar";
import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { FaFileExcel } from "react-icons/fa";
import Link from "next/link";

// This is sample data.
const data = {
  versions: [" Payments", " Yet To Pay"],
  navMain: [
    {
      title: "Data",
      url: "#",
      items: [
        {
          title: "ask AI",
          url: "./ai",
        },
        {
          title: "videocall",
          url: "./videocall",
        },
        {
          title: "Donation",
          url: "./donation",
        },
        {
          title: "chat",
          url: "./chat",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarGroupLabel className="mt-10 text-2xl">
        <h1 className="font-bold">Our services</h1>
      </SidebarGroupLabel>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>donations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu></SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
