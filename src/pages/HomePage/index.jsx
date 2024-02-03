import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { ProductList } from "../../components/ProductList";
import { productsAPI } from "../../services/api";
import { toast } from "react-toastify";
import { DefaultTemplate } from "../../components/DefaultTemplate";


export const HomePage = () => {
   const takeLocalStorage = JSON.parse(localStorage.getItem("keyId"));
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(takeLocalStorage);
   const [isVisible, setVisible] = useState(false);


   useEffect(() => {
      const getProducts = async () => {
         const {data} = await productsAPI.get("/products");
         setProductList(data);
      }

      getProducts();
   }, []);

   useEffect(() => {
      localStorage.setItem("keyId", JSON.stringify(cartList))
   }, [cartList])
   const addCart = (product) => {
      const addProduct = cartList.some((item) => item.id === product.id)

      if (!addProduct) {
         setCartList([...cartList, product]);
         toast.success("Itema added")
      } else {        
         toast.error("Item already added to cart")
      }

   };

   const removeCart = (product) => {
      setCartList((cartList) => {
      const newCart = [...cartList];
      newCart.splice(product, 1);
      return newCart;
     })
   }

   const removeAllCart = () => {
      setCartList([]);
   }

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
      <DefaultTemplate 
         setVisible={setVisible}
         cartList={cartList}>
            <ProductList 
               productList={productList}
               addCart={addCart}
            />
         
      </DefaultTemplate>

      {isVisible ? (
            <CartModal 
            cartList={cartList}
            setVisible={setVisible}
            removeCart={removeCart}
            removeAllCart={removeAllCart}
            />    
         ) : null}    
      </>
   );
};
