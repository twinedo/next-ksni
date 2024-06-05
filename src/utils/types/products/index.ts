export type TProductResponse = {
    id: string;
    name: string;
}

export type TImageResponse = {
    id: string[];
    image: string;
}

export type TProduct = {
    image: string;
} & TProductResponse;