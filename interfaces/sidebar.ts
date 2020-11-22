export interface SidebarEntry {
  text: string;
  image?: string;
}

export interface SidebarGroup {
  name: string;
  item: SidebarEntry[];
}