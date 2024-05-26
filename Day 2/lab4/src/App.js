import { useDispatch, useSelector } from "react-redux";
import BasketProducts from "./components/BasketProducts";
import Navbar from "./components/Navbar";
import { updateTotal } from "./features/basketSlice";
import { useEffect } from "react";

function App() {
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);

  return (
    <>
      <h1 className="text-center text-3xl font-medium mt-2 py-4">
        Simple Redux Store
      </h1>
      <Navbar />
      <BasketProducts />
    </>
  );
}

export default App;
