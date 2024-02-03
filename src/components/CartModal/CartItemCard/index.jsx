import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const CartItemCard = ({ key, product, removeCart }) => {
   return (
      <li className={style.container}>
            <img src={product.img} alt={product.name} />
         <div key={product.key}>
            <h3 className="title3">{product.name}</h3>
            <span className="value">
                    {product.price.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})}
                </span> 
         </div>
         <button 
            onClick={() => removeCart(product)} 
            aria-label="delete" 
            title="Remover item">
            <MdDelete 
               size={21} 
               color="grey" 
               cursor="pointer"
            />
         </button>
      </li>
   );
};
