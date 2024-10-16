import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Product from "../components/Product"
import { useInView } from "react-intersection-observer";

jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(),
}));

describe("Product Component", () => {
  const mockProductDetails = {
    title: "Test Product",
    description: "This is a description of the test product.",
    price: "100",
    thumbnail: "test-thumbnail.jpg",
  };

  beforeEach(() => {
    useInView.mockImplementation(() => ({
      ref: jest.fn(),
      inView: true, 
    }));
  });

  it("renders with valid product details", () => {
    render(<Product productDetails={mockProductDetails} />);
    expect(screen.getByTestId("product-title")).toHaveTextContent(mockProductDetails.title);
    expect(screen.getByTestId("product-description")).toHaveTextContent(mockProductDetails.description.slice(0, 50));
    expect(screen.getByTestId("product-price")).toHaveTextContent(mockProductDetails.price);
  });

  it("displays a placeholder image before the actual image loads", () => {
    render(<Product productDetails={mockProductDetails} />);
    expect(screen.getByTestId("placeholder-image")).toBeInTheDocument();
    const productImage = screen.getByTestId("product-image");
    expect(productImage).toHaveStyle("display: none");
  });

  it("confirms the image loads correctly", async () => {
    render(<Product productDetails={mockProductDetails} />);
    const productImage = screen.getByTestId("product-image");
    fireEvent.load(productImage);
    expect(productImage).toHaveStyle("display: block");
  });

  it("handles inView functionality correctly", () => {
    render(<Product productDetails={mockProductDetails} />);
    expect(screen.getByTestId("product-title")).toBeInTheDocument();
  });
});
