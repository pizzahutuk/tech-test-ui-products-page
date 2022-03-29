import React from "react";
import { render, screen } from "@testing-library/react";
import { Currency } from "./Currency";

describe("<Currency />", () => {
  it("renders without crashing", () => {
    render(<Currency />);
  });
});
