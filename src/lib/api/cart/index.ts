import products from "../products";

export type Cart = {
    items: CartItem[];
};

export type CartItem = {
    productId: number;
    quantity: number;
};

function clear() {
    const emptyCart = {
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
    window.dispatchEvent(new Event("cartUpdated"));
    return saveCart(cart);
}

function remove(id: number) {
    const cart = getCart();
    cart.items = cart.items.filter((item) => item.productId !== id);
    window.dispatchEvent(new Event("cartUpdated"));
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
    const cart = getCart();
    return cart;
}

function getTotal(): number {
    const cart = getCart();
    const all = products.getAll();
    const total = cart.items.reduce((sum, cartItem) => {
        const product = all.find((p) => p.id === cartItem.productId);
        if (product) {
            const productTotal = product.price * cartItem.quantity;
            return sum + productTotal;
        }
        return sum;
    }, 0);

    return total;
}

function getTotalQuantity(): number {
    const cart = getCart();
    const totalQuantity = cart.items.reduce((sum, cartItem) => {
        return sum + cartItem.quantity;
    }, 0);

    return totalQuantity;
}

export default Object.freeze({
    clear,
    add,
    remove,
    increaseQuantity,
    decreaseQuantity,
    getAll,
    getTotal,
    getTotalQuantity,
});
