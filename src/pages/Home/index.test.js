import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      setTimeout(async () => {
        await screen.findByText("Message envoyé !");
      }, 3000);
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    await waitFor(() => {
      const eventList = screen.getByTestId("event-list");
      expect(eventList).toBeInTheDocument();
    });
    // to implement
  });
  it("a list a people is displayed", async () => {
    render(<Home />);
    const peopleList = screen.getByTestId("people-list");
    expect(peopleList).toBeInTheDocument();
    // to implement
  });
  it("a footer is displayed", async () => {
    render(<Home />);
    const footerElement = screen.getByTestId("footer-element");
    expect(footerElement).toBeInTheDocument();
    // to implement
  });
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    const lastEvent = screen.getByTestId("lastcard-testid");
    expect(lastEvent).toBeInTheDocument();

    // to implement
  });
});
