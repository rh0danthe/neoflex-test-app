export type Cart = {
    count: number;
    items: CartItem[];
};

export type CartItem = {
    productId: number;
    quantity: number;
};

function clear() {
    const emptyCart = {
        count: 0,
        items: [],
    };

    localStorage.setItem("cart", JSON.stringify(emptyCart));

    return emptyCart;
}

function getCart(): Cart {
    const currentCart = localStorage.getItem("cart");

    if (!currentCart) {
        return clear();
    }

    try {
        return JSON.parse(currentCart);
    } catch {
        return clear();
    }
}

function saveCart(cart: Cart): Cart {
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
}

function add(id: number, quantity?: number) {
    const cart = getCart();
    const existingItem = cart.items.find((item) => item.productId === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.items.push({ productId: id, quantity: quantity ?? 1 });
    }

    return saveCart(cart);
}

function remove(id: number) {
    const cart = getCart();
    cart.items = cart.items.filter((item) => item.productId !== id);
    saveCart(cart);
}

function increaseQuantity(id: number) {
    const cart = getCart();
    const existingItem = cart.items.find((item) => item.productId === id);

    if (!existingItem) {
        return cart;
    }

    existingItem.quantity++;

    return saveCart(cart);
}

function decreaseQuantity(id: number) {
    const cart = getCart();
    const existingItem = cart.items.find((item) => item.productId === id);

    if (!existingItem) {
        return cart;
    }

    if (existingItem.quantity === 1) {
        return remove(id);
    }

    existingItem.quantity--;

    return saveCart(cart);
}

function getAll(): Cart {
    // TODO: добавить фильтры
    const cart = getCart();
    return cart;
}

export default Object.freeze({
    clear,
    add,
    remove,
    increaseQuantity,
    decreaseQuantity,
    getAll,
});
