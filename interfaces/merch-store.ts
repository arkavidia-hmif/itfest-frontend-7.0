export interface MerchStoreItem {
  id: number,
  image: string,
  name: string,
  price: number,
  quantity: number
}

export type MerchStoreCarouselButtonType = "PREV" | "NEXT";