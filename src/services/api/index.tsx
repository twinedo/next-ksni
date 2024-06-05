import { TImageResponse, TProductResponse } from "@/utils/types/products";

export const getListProductName = async () => {
    try {
        const response = await fetch(`${process.env.baseURL}/product.json`);
        const result = await response.json();
        return Promise.resolve(result.data as TProductResponse[]);
    } catch (error) {
        return Promise.reject(error);
    }
}

export const getListProductImage = async () => {
    try {
        const response = await fetch(`${process.env.baseURL}/image.json`);
        const result = await response.json();
        return Promise.resolve(result.data as TImageResponse[]);
    } catch (error) {
        return Promise.reject(error);
    }
}