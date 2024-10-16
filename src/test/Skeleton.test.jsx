import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SkeletonProduct from "../components/SkeletonProduct"; // Adjust the import based on your file structure

describe("SkeletonProduct Component", () => {
  it("renders the correct number of skeletons", () => {
    render(<SkeletonProduct />);
    const skeletonCards = screen.getAllByTestId("skeleton-grid");
    expect(skeletonCards.length).toBe(12); 
  });
});
