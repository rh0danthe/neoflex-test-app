import { Typography } from "../typography";
import "./styles.scss";
import minus from "/src/assets/minus.svg";
import plus from "/src/assets/plus.svg";
import deleteitem from "/src/assets/delete-from-cart.svg";
import cart from "../../lib/api/cart";

export type CartItemProps = {
    name: string;
    price: number;
    discount?: number;
    image: string;
    id: number;
    quantity: number;
    onQuantityChange: () => void;
};

function CartItem(
    props: CartItemProps & { removeFromCart: (id: number) => void }
) {
    const { id, quantity, removeFromCart } = props;

    const handleIncrease = () => {
        cart.increaseQuantity(id);
        props.onQuantityChange();
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            cart.decreaseQuantity(id);
            props.onQuantityChange();
        } else {
            removeFromCart(id);
        }
    };

    return (
        <div className="cart-item">
            <div className="cart-item__group">
                <div className="cart-item__graphics">
                    <div className="cart-item__graphics-img">
                        <img
                            src={props.image}
                            className="cart-item__graphics-img-f"
                        />
                    </div>
                    <div className="cart-item__graphics-count">
                        <img
                            src={minus}
                            onClick={handleDecrease}
                            className="cart-item__graphics-count-sign"
                        />
                        <Typography type="p1" className="font_600">
                            {quantity}
                        </Typography>
                        <img
                            src={plus}
                            onClick={handleIncrease}
                            className="cart-item__graphics-count-sign"
                        />
                    </div>
                </div>
                <div className="cart-item__info">
                    <Typography type="p1" className="font_500">
                        {props.name}
                    </Typography>
                    <Typography type="p2" color="gray" className="font_600">
                        {props.discount
                            ? `${props.price - props.discount} ₽`
                            : `${props.price} ₽`}
                    </Typography>
                </div>
            </div>
            <div className="cart-item__controls">
                <img
                    src={deleteitem}
                    onClick={() => removeFromCart(id)}
                    className="cart-item__controls-delete"
                />
                <Typography type="p2" className="font_600">
                    {props.price * quantity} ₽
                </Typography>
            </div>
        </div>
    );
}

export default CartItem;
