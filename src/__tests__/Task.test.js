import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task task={{ text: "text!", category: "category!" }} onDelete={() => {}} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task task={{ text: "text!", category: "category!" }} onDelete={() => {}} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});
test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  const task = screen.queryByText(/Buy rice/);
 
  const deleteButton = task.parentElement.querySelector("button");

  fireEvent.click(deleteButton);

  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});