export type Order = { 
    id: number;
    addres: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    products: Product[];
    total: number;
}

export type Product = {
    id: number;
    name: string;
    price: number;
    description: number;
    imageUri: string;
}