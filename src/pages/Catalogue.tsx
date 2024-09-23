import CardList from "../components/card-list";
import "../styles/pages/Catalogue.scss";

function Catalogue() {
    return (
        <div className="catalogue">
            <CardList sectionName={"Наушники"} category={"headphones"} type={"wired"}/>
            <CardList sectionName={"Беспроводные наушники"} category={"headphones"} type={"wireless"}/>
        </div>
    );
}

export default Catalogue;
