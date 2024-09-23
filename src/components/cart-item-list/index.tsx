import cart from "../../lib/api/cart";
import products from "../../lib/api/products";
import CartItem from "../cart-item";

export type CartItemListProps = {
    items: {
        productId: number;
        quantity: number;
    }[];
    onUpdate: () => void; 
}

function CartItemList(props: CartItemListProps) {
    const removeFromCart = (id: number) => {
        cart.remove(id);
        props.onUpdate();
    };

    return (
        <div>
            {props.items.map((item) => {
                const product = products.getById(item.productId); 

                if (!product) return null;

                return (
                    <CartItem
                        key={item.productId}
                        id={item.productId}
                        name={product.name}
                        price={product.price}
                        image={product.imageUrl}
                        quantity={item.quantity}
                        removeFromCart={removeFromCart}
                        onQuantityChange={props.onUpdate}
                    />
                );
            })}
        </div>
    );
}

export default CartItemList;
