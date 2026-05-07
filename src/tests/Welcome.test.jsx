import { render, screen } from "@testing-library/react";
import MyAlert from "../components/Welcome";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";

describe("Test del componente Welcome", () => {
  it("Verifica del componente Welcome venga montato correttamente", () => {
    render(<MyAlert />);
    const alertHeading = screen.getByText(/benvenuto nella libreria epicode/i);
    expect(alertHeading).toBeInTheDocument();
  });
});
