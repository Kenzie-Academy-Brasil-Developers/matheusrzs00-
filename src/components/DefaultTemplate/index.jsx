import { Header } from "../Header"

export const DefaultTemplate = ({children, setVisible, cartList}) => {

    return (
        <>
        <Header
            setVisible={setVisible}
            cartList={cartList}/>
        <main>
            {children}
        </main>
        </>
    )
}