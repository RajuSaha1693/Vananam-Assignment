import { Suspense, lazy } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Navbar from "./components/Navbar";
const ProductList = lazy(() => import("./components/ProductList"));
const CircularIndeterminate=()=>{
  return (
    <Box sx={{ display: 'flex',alignItems: "center",justifyContent: "center", height: "80vh"}}>
      <CircularProgress />
    </Box>
  );
}
function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<CircularIndeterminate/>}>
        <ProductList />
      </Suspense>
    </>
  );
}

export default App;
