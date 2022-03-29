import React from "react";
import { render, screen } from "@testing-library/react";
import { Currency } from "./Currency";

describe("<Currency />", () => {
  it("renders without crashing", () => {
    render(<Currency value={1} locale="en-GB" currency="GBP" />);
  });

  it("localises a whole en-GB GBP value", () => {
    render(<Currency value={10} locale="en-GB" currency="GBP" />);
    screen.getByText("£10.00");
  });

  it("localises a decimalised en-GB GBP value", () => {
    render(<Currency value={10.54} locale="en-GB" currency="GBP" />);
    screen.getByText("£10.54");
  });

  it("localises a fractional, decimalised en-GB GBP value, rounded halfup", () => {
    render(<Currency value={10.546} locale="en-GB" currency="GBP" />);
    screen.getByText("£10.55");
  });

  it("localises a fractional, decimalised en-GB GBP value, rounded halfdown", () => {
    render(<Currency value={10.544} locale="en-GB" currency="GBP" />);
    screen.getByText("£10.54");
  });

  it("localises a decimalised fr-FR GBP value", () => {
    render(<Currency value={10.54} locale="fr-FR" currency="GBP" />);
    screen.getByText("10,54 £GB");
  });

  it("localises a whole hi-IN INR value", () => {
    render(<Currency value={521} locale="hi-IN" currency="INR" />);
    screen.getByText("₹521.00");
  });

  it("localises a whole en-IN INR value", () => {
    render(<Currency value={521} locale="en-IN" currency="INR" />);
    screen.getByText("₹521.00");
  });
});
