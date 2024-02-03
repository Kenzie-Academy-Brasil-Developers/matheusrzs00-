import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import {MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";

export const Header = ({setVisible, cartList}) => {
   const [value, setValue] = useState("");

   return (
      <header className={style.container}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setVisible(true)}>
                <MdShoppingCart color="#BDBDBD" size={21} />
                <span className="value">{cartList.length}</span>
            </button>
          </div>
      </header>
   );
};
