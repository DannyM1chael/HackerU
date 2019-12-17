import products from './dataProducts';

export const fetchProductsApi = async() => {
    return new Promise((resolve, reject) => {
        resolve(products);
    })
}