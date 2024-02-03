import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";

export const CartModal = ({ cartList, setVisible, removeCart, removeAllCart }) => {

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog">
         <div className={style.container}>
            <div>
               <div className={style.close}>
                  <h3 className="title3">Shopping car</h3>
                  <button 
                     aria-label="close" 
                     title="Fechar" 
                     onClick={() => setVisible(false)}>
                     <MdClose size={23} color="#FFFFFF80"  />
                  </button>
               </div>
               <div className={style.render}>
                  <ul className={style.showCart}>
                     {cartList.map((product) => (
                        <CartItemCard 
                        key={product.id} 
                        product={product} 
                        removeCart={removeCart}/>
                        ))}
                  </ul>
               </div>
               <div className={style.containerRemove}>
                  <div>
                     <span className="value total">Total</span>
                     <span className="value totalValue">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}
                     </span>
                  </div>
                  <button 
                     onClick={() => removeAllCart()} 
                     className="btn">
                     Remove all
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
