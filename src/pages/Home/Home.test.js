import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";

test("Home should render", () => {
  render(<Home />);
});

test("Main container should render", () => {
  render(<Home />);
  const mainContainer = screen.getByTestId("main-container");
  expect(mainContainer).toBeInTheDocument();
});

test("Logo container should render", () => {
  render(<Home />);
  const logoContainer = screen.getByTestId("logo-container");
  expect(logoContainer).toBeInTheDocument();
});

// Artist card should not be present on first render because it only appears after search
test("Artist card should not render", () => {
  render(<Home />);
  const artistCard = screen.queryByTestId("artist-card");
  expect(artistCard).not.toBeInTheDocument();
});
