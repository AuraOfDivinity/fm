import styles from "./Menu.module.css";
import data from "../../data.json";
import ProductCard from "./ProductCard.tsx";

const imageModules = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const resolveImageUrl = (imagePath: string) => {
  const fileName = imagePath.split("/").pop();

  if (!fileName) {
    return "";
  }

  return imageModules[`../assets/images/${fileName}`] ?? "";
};

const Menu = () => {
  return (
    <section>
      <div className={`text-preset-1`}>Desserts</div>
      <div className={styles.menu__cardContainer}>
        {data.map((card) => {
          return (
            <ProductCard
              key={card.name}
              title={card.category}
              description={card.name}
              price={card.price}
              assetUrl={resolveImageUrl(card.image.desktop)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
