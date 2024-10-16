import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../components/Navbar"; 
import '@testing-library/jest-dom'; 

describe("Navbar Component", () => {
  test("renders Navbar with logo", () => {
    render(<Navbar />);
    const desktopLogo = screen.getByTestId("logo-id");
    expect(desktopLogo).toBeInTheDocument();
  });
  test("opens the mobile menu when hamburger icon is clicked", () => {
    render(<Navbar />);
    const hamburgerIcon = screen.getByTestId("hamburger-id");
    fireEvent.click(hamburgerIcon);
    const mobileMenuItem = screen.getByTestId("mobile-menu");
    expect(mobileMenuItem).toBeInTheDocument();
  });
});
