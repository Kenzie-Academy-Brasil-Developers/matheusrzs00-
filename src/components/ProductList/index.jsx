import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";

export const ProductList = ({ productList, addCart }) => {
   console.log(productList)
   return (
      <ul className={style.container}>
            {productList.map((product) => (
               <ProductCard
               key={product.id}
               product={product}
               addCart={addCart}
               />
            ))}       
      </ul>
   );
};
