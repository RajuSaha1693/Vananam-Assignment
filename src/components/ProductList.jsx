import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid2";
import SkeletonProduct from "./SkeletonProduct";
import Product from "./Product";
import { useInView } from "react-intersection-observer";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Grid container spacing={3} padding={3} ref={ref}>
      {loading ? (
        <SkeletonProduct />
      ) : (
        inView &&
        products.map((product) => (
          <Product productDetails={product} key={product.id} />
        ))
      )}
    </Grid>
  );
};

export default ProductList;
