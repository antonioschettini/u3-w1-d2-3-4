import { fireEvent, screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import "@testing-library/jest-dom";

describe("Test di interazione libri e commenti", () => {
  it("cambia colore del bordo al click e si resetta", async () => {
    render(<App />);
    const allCard = screen.getAllByTestId("book-card");

    const firstCard = allCard[0];
    const secondCard = allCard[1];

    //  Clicco la prima card
    fireEvent.click(firstCard);

    expect(firstCard).toHaveStyle({ "border-color": "rgb(255, 0, 0)" });

    //  Clicco la seconda card
    fireEvent.click(secondCard);
    expect(secondCard).toHaveStyle({ "border-color": "rgb(255, 0, 0)" });

    //  Verifico che la prima sia tornata grigia
    expect(firstCard).toHaveStyle({ "border-color": "rgb(128, 128, 128)" });
  });

  it("non ci sono commenti all'avvio della pagina", () => {
    render(<App />);
    const comments = screen.queryAllByTestId("single-comment");
    expect(comments).toHaveLength(0);
  });

  it("carica le recensioni al click su una card", async () => {
    render(<App />);
    const allCard = screen.getAllByTestId("book-card");
    fireEvent.click(allCard[0]);

    const comment = await screen.findAllByTestId("single-comment");
    expect(comment.length).toBeGreaterThan(0);
  });
});
