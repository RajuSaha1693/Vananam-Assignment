import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import axios from "axios";
import ProductList from "../components/ProductList";
import { useInView } from "react-intersection-observer";

jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(),
}));

jest.mock("axios");

describe("ProductList", () => {
  beforeEach(() => {
    useInView.mockImplementation(() => ({
      ref: jest.fn(),
      inView: true,
    }));
    jest.clearAllMocks();
  });
  it("renders skeleton while loading", async () => {
    axios.get.mockResolvedValue({ data: { products: [] } });

    await act(async () => {
      render(<ProductList />);
    });
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  });

  it("renders products after successful fetch", async () => {
    const mockProducts = [
      {
        id: 1,
        title: "Another Test Product",
        description: "This is a description of the test product.",
        price: "100",
        thumbnail: "test-thumbnail.jpg",
      },
      {
        id: 2,
        title: "Test Product",
        description: "This is a description of the test product.",
        price: "100",
        thumbnail: "test-thumbnail.jpg",
      },
    ];
    axios.get.mockResolvedValue({ data: { products: mockProducts } });

    await act(async () => {
      render(<ProductList />);
    });

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(screen.getAllByTestId("product-title")).toHaveLength(mockProducts.length);
  });
});
