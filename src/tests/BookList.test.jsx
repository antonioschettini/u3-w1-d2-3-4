import { render, screen, fireEvent } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";
import "@testing-library/jest-dom";

describe("Test di Booklist", () => {
  it("Verifica che vengano renderizzati correttamente le card", () => {
    render(<BookList libri={fantasy} />);
    // ho utilizzato uno slice quindi mi aspetto 8 card
    const allCard = screen.getAllByTestId("book-card");
    expect(allCard).toHaveLength(8);
  });
  it("Verifico che la comment area sia presente", () => {
    render(<BookList libri={fantasy} />);
    const commentArea = screen.getByTestId("comment-area-container");
    expect(commentArea).toBeInTheDocument();
  });
  it("Verifica che il filtraggio funzioni", () => {
    render(<BookList libri={fantasy} />);
    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "sword" } });
    const filteredCards = screen.getAllByTestId("book-card");
    expect(filteredCards.length).toBeLessThanOrEqual(8);
  });
});
