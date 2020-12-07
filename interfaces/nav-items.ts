export interface SubMenuItem {
  path: string;
  text: string;
}

export interface NavItem {
  text: string;
  path: string;
  haveChild: boolean;
  protected: boolean;
  submenu?: SubMenuItem[];
}
