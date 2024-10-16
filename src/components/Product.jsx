import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { useState } from "react";
const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const CardContentFixedHeight = styled(CardContent)({
  flexGrow: 1,
});
const PlaceholderImage = styled("div")({
  height: "200px",
  backgroundColor: "#e0e0e0", 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Product = ({ productDetails }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Grid size={{ xs: 12, sm: 4, md: 3, lg: 2 }} ref={ref}>
      {inView && (
        <StyledCard>
          {!imageLoaded && (
            <PlaceholderImage>
              <Typography variant="body2" color="text.secondary" data-testid="placeholder-image">
              {productDetails.title}
              </Typography>
            </PlaceholderImage>
          )}
          <CardMedia
            data-testid="product-image"
            component="img"
            height="200"
            image={productDetails.thumbnail}
            alt={productDetails.title}
            style={{
              display: imageLoaded ? "block" : "none",
              objectFit: "contain", 
              width: "100%", 
              height: "auto", 
            }}
            onLoad={() => setImageLoaded(true)}
          />
          <CardContentFixedHeight>
            <Typography variant="h7" gutterBottom data-testid="product-title">
              {productDetails.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" data-testid="product-description">
              {productDetails.description.slice(0, 50)}...
            </Typography>
            <Typography variant="h6" color="primary" data-testid="product-price">
              {productDetails.price}
            </Typography>
          </CardContentFixedHeight>
        </StyledCard>
      )}
    </Grid>
  );
};
export default Product;

Product.propTypes = {
  productDetails: PropTypes.object.isRequired,
};
