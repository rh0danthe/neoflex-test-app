import { HeadphonesType, products, ProductType } from "../../data/";

function getById(id: number) {
    return products.find((product) => product.id === id);
}

function getByType(category: ProductType, type: HeadphonesType) {
    return products.filter((product) => product.type === category && product.meta.type === type);
}

function getAll() {
    return products;
}

export default Object.freeze({
    getById,
    getByType,
    getAll,
});
