import { useEffect, useState } from "react";
import Button from "../components/button";
import CartItemList from "../components/cart-item-list";
import { Typography } from "../components/typography";
import cart from "../lib/api/cart";
import "../styles/pages/Cart.scss";

function Cart() {
    const [cartItems, setCartItems] = useState(cart.getAll().items);
    const [total, setTotal] = useState(cart.getTotal());

    const updateCart = () => {
        setCartItems(cart.getAll().items);
        setTotal(cart.getTotal());
    };

    useEffect(() => {
        updateCart();
    }, []);
    return (
        <div>
            <div className="cart">
                <div>
                    <Typography type="h1" color="dark_gray">
                        Корзина
                    </Typography>
                    <div>
                        <CartItemList items={cartItems} onUpdate={updateCart} />
                    </div>
                </div>
                <div className="cart__payform">
                    <div className="cart__payform-total">
                        <Typography type="p2" className="font_600">ИТОГО</Typography>
                        <Typography type="p2" className="font_600">₽ {total}</Typography>
                    </div>
                    <Button
                        colorBehavior="black"
                        textBehavior="p1"
                        className="cart__payform-button"
                    >
                        Перейти к оформлению
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
