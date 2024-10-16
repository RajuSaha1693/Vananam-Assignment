import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
const SkeletonProduct = () => {
  const dummyArray = Array.from(new Array(12));
  return dummyArray.map((_, index) => (
    <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }} key={index + "1"} data-testid="skeleton-grid">
      <Card style={{ width: "100%" }}>
        <Skeleton variant="rectangular" height={200} />
        <CardContent>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="text" width="40%" />
        </CardContent>
      </Card>
    </Grid>
  ));
};

export default SkeletonProduct;
