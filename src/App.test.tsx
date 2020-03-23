import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders developement proccess", () => {
  const { getByText } = render(<App />);
  const pElement = getByText(/proccess/i);
  expect(pElement).toBeInTheDocument();
});
