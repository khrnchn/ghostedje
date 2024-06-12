import { SidebarLink } from "@/components/SidebarItems";
import { Cog, Globe, HomeIcon, Ghost } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Home", icon: HomeIcon },
  { href: "/account", title: "Account", icon: Cog },
  { href: "/jobghosters", title: "Job Ghosters", icon: Ghost },
];

export const additionalLinks: AdditionalLinks[] = [];
