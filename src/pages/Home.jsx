
import { ItemListContainer } from "../components";
import { useProducts } from "../hooks/useProducts";

export const Home = () => {

  const { products } = useProducts();

  return <ItemListContainer products={products} />;
};