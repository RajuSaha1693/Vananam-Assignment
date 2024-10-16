import "@testing-library/jest-dom";
import { render, act,screen} from "@testing-library/react";
import App from "../App";
jest.mock("../components/ProductList", () => () => <div>Mock Product List</div>);
describe("App", () => {
  it("Renders the main page", async() => {
    render(<App />);
    const navbar = screen.getByTestId("logo-id");
    expect(navbar).toBeInTheDocument();
    expect(await screen.findByText(/mock product list/i)).toBeInTheDocument();
  });
});
