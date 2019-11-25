import React from "react";
import * as rtl from "@testing-library/react";
import DarkModeButton from "./DarkModeButton.js";

test("It renders without crashing", () => {
  rtl.render(<DarkModeButton />);
});

test("It renders the Dark/Light Mode button", () => {
  const container = rtl.render(<DarkModeButton />);
  container.getByTestId("dark-mode-button");
});
