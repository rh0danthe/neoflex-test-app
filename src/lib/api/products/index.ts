import { products, ProductType } from "../../data/";

function getById(id: number) {
    return products.find((product) => product.id === id);
}

function getByType(type: ProductType) {
    return products.filter((product) => product.type === type);
}

export default Object.freeze({
    getById,
    getByType,
    products,
});
