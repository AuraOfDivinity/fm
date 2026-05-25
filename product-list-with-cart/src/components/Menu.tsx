import styles from "./Menu.module.css";
import ProductCard from "./ProductCard.tsx";
import { useCartState } from "../hooks/useCartState.ts";
import { resolveImageUrl } from "../utils/resolveImageUrl.ts";

const Menu = () => {
  const state = useCartState();
  return (
    <section>
      <div className={`text-preset-1`}>Desserts</div>
      <div className={styles.menu__cardContainer}>
        {state.productData.map((card) => {
          return (
            <ProductCard
              key={card.name}
              title={card.category}
              description={card.name}
              price={card.price}
              assetUrl={resolveImageUrl(card.image.desktop)}
              quantityInCart={card.cartQuantity}
              id={card.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
