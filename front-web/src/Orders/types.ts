export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}

export type OrderLocationData = {
    latitude: number;
    longitude:number;
    addres: string;
}

type ProductId = {
    id: number;
}

export type OrderPayLoad = {
    products: ProductId[];
} & OrderLocationData;