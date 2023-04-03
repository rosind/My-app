import Header from "./components/Layout/Header";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Posts from "./components/Product/posts";
import { useState } from "react";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler} />
      <main>
        <Product />
      </main>

      <footer>
        <Posts />
      </footer>

    </>
  );
}

export default App;
