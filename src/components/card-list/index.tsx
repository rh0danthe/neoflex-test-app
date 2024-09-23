import { HeadphonesType, ProductType } from "../../lib/data";
import products from "../../lib/api/products";
import "./styles.scss";
import { Typography } from "../typography";
import Card from "../card";

interface ICardList {
    sectionName: string;
    category: ProductType;
    type: HeadphonesType;
}

function CardList({ sectionName, category, type }: ICardList) {
    const all = products.getByType(category, type);

    return (
        <div className="cardlist">
            <Typography type="h1" color="gray">
                {sectionName}
            </Typography>
            <div className="cardlist__content">
                {all.map((product) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        discount={product.discount}
                        price={product.price}
                        rating={product.rating}
                        image={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardList;
