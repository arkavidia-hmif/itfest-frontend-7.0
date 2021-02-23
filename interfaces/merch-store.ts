export interface MerchStoreItem {
  id: number,
  imageUrl: string,
  name: string,
  price: number,
  qty: number,
  hasPhysical: boolean;
}

export type MerchStoreCarouselButtonType = "PREV" | "NEXT";