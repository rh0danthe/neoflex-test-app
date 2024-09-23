import Button from "../button";
import { Typography } from "../typography";
import "./styles.scss";
import star from "/src/assets/star.svg";
import Cart from "../../lib/api/cart";

export type CardProps = {
    id: number;
    rating: number;
    name: string;
    price: number;
    discount?: number;
    image: string;
};

function Card(props: CardProps) {
    const addToCart = (id: number) => {
        Cart.add(id);
    };

    return (
        <div className="card">
            <div className="card__img">
                <img
                    src={props.image}
                    alt={props.name}
                    className="card__img-f"
                />
            </div>
            <div className="card__content">
                <div className="card__content-info">
                    <Typography type="p1" className="card__content-font">
                        {props.name}
                    </Typography>
                    <div className="card__content-info-rating">
                        <img src={star} alt="Rating" />
                        <Typography
                            type="p1"
                            color="gray"
                            className="card__content-font"
                        >
                            {props.rating}
                        </Typography>
                    </div>
                </div>
                <div className="card__content-buy">
                    <div className="card__content-buy-prices">
                        <Typography
                            type="p1"
                            color="orange_200"
                            className="card__content-font"
                        >
                            {props.discount
                                ? `${props.price - props.discount} ₽`
                                : `${props.price} ₽`}
                        </Typography>
                        <div className="discount-container">
                            {props.discount && (
                                <Typography
                                    type="p3"
                                    color="orange_200"
                                    className="discount"
                                >
                                    {props.price} ₽
                                </Typography>
                            )}
                        </div>
                    </div>
                    <Button
                        colorBehavior="transparent"
                        textBehavior="p1"
                        onClick={() => {
                            console.log(props);
                            addToCart(props.id);
                        }}
                    >
                        Купить
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Card;
