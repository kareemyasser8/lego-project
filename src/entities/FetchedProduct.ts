export interface FetchedProductImage{
    url: string
}

export interface FetchedProduct{
    limit: number,
    Images: FetchedProductImage[],
    description: string,
    id: number,
    numInStock: number,
    price: number,
    rating: number,
    title: string,
}
