
export const ProductCard = ({ product, addCart }) => {
    return(
        <li>
            <img src={product.img} alt={product.name} />
            <div>
                <h3 className="title3">{product.name}</h3>
                <span className="headline">{product.category}</span>
                <span className="value">
                    {product.price.toLocaleString('pt-BR', {style: "currency", currency: "BRL"})}
                </span>    
                <button 
                    className="btn"
                    onClick={() => addCart(product)}>
                    Adicionar
                </button>       
            </div>
        </li>
    )
}