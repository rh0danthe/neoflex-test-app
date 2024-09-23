export type HeadphonesType = "wireless" | "wired";
export type ProductType = "headphones"

export type ProductMeta = {
    // Нужно, чтобы потом при масштабировании магазина добавлять новые картинки в карусель у товара.
    images: string[];
};

export interface HeadphonesMeta extends ProductMeta {
    type: HeadphonesType;
}

export type Product<T> = {
    id: number;
    name: string;
    price: number;
    discount?: number;
    rating: number;
    imageUrl: string;
    type: ProductType;
    meta: T;
};

export const products: Product<HeadphonesMeta>[] = [
    {
        id: 1,
        name: "Apple BYZ S852I",
        type: 'headphones',
        price: 3527,
        discount: 600,
        rating: 4.7,
        imageUrl: "/headphones/wired/1.png",
        meta: {
            type: "wired",
            images: [],
        },
    },
    {
        id: 2,
        name: "Apple EarPods",
        type: 'headphones',
        price: 2327,
        rating: 4.5,
        imageUrl: "/headphones/wired/2.png",
        meta: {
            type: "wired",
            images: [],
        },
    },
    {
        id: 3,
        name: "Apple EarPods",
        type: 'headphones',
        price: 2327,
        rating: 4.5,
        imageUrl: "/headphones/wired/3.png",
        meta: {
            type: "wired",
            images: [],
        },
    },
    {
        id: 4,
        name: "Apple BYZ S852I",
        type: 'headphones',
        price: 2927,
        rating: 4.7,
        imageUrl: "/headphones/wired/4.png",
        meta: {
            type: "wired",
            images: [],
        },
    },
    {
        id: 5,
        name: "Apple EarPods",
        type: 'headphones',
        price: 2327,
        rating: 4.5,
        imageUrl: "/headphones/wired/5.png",
        meta: {
            type: "wired",
            images: [],
        },
    },
    {
        id: 6,
        name: "Apple EarPods",
        type: 'headphones',
        price: 2327,
        rating: 4.5,
        imageUrl: "/headphones/wired/6.png",
        meta: {
            type: "wired",
            images: [],
        },
    },
    {
        id: 7,
        name: "Apple EarPods",
        type: 'headphones',
        price: 9527,
        rating: 4.7,
        imageUrl: "/headphones/wireless/1.png",
        meta: {
            type: "wireless",
            images: [],
        },
    },
    {
        id: 8,
        name: "GERLAX GH-04",
        type: 'headphones',
        price: 6527,
        rating: 4.7,
        imageUrl: "/headphones/wireless/2.png",
        meta: {
            type: "wireless",
            images: [],
        },
    },
    {
        id: 9,
        name: "BOROFONE BO4",
        type: 'headphones',
        price: 7527,
        rating: 4.7,
        imageUrl: "/headphones/wireless/3.png",
        meta: {
            type: "wireless",
            images: [],
        },
    },
];
