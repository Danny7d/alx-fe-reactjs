import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders correctly with initial todos", () => {
    render(<TodoList />);

    // Check that the main heading is rendered
    expect(screen.getByText("Todo List")).toBeInTheDocument();

    // Check that initial demo todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();

    // Check that there are 3 todo items initially
    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(3);

    // Check that the add form is rendered
    expect(
      screen.getByPlaceholderText("Add a new todo...")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Todo" })
    ).toBeInTheDocument();
  });

  test("adds a new todo when form is submitted", () => {
    render(<TodoList />);

    // Get the input field and add button
    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByRole("button", { name: "Add Todo" });

    // Type a new todo and submit the form
    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    // Check that the new todo is added
    expect(screen.getByText("New Todo Item")).toBeInTheDocument();

    // Check that there are now 4 todo items
    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(4);

    // Check that the input field is cleared after submission
    expect(input.value).toBe("");
  });

  test("does not add empty todo when submitting empty form", () => {
    render(<TodoList />);

    // Get the initial count of todos
    const initialTodoItems = screen.getAllByRole("listitem");
    const initialCount = initialTodoItems.length;

    // Get the add button and click it without entering any text
    const addButton = screen.getByRole("button", { name: "Add Todo" });
    fireEvent.click(addButton);

    // Check that no new todo was added
    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(initialCount);
  });

  test("toggles todo completion status when clicked", () => {
    render(<TodoList />);

    // Find the "Learn React" todo item
    const learnReactTodo = screen.getByText("Learn React");

    // Initially, this todo should not be completed (no completed class)
    const todoItem = learnReactTodo.closest("li");
    expect(todoItem).not.toHaveClass("completed");

    // Click on the todo text to toggle completion
    fireEvent.click(learnReactTodo);

    // Now the todo should be completed
    expect(todoItem).toHaveClass("completed");

    // Click again to toggle back
    fireEvent.click(learnReactTodo);

    // Now it should not be completed again
    expect(todoItem).not.toHaveClass("completed");
  });

  test("deletes a todo when delete button is clicked", () => {
    render(<TodoList />);

    // Get the initial count of todos
    const initialTodoItems = screen.getAllByRole("listitem");
    expect(initialTodoItems).toHaveLength(3);

    // Find the delete button for the "Learn React" todo
    const deleteButtons = screen.getAllByRole("button", { name: "Delete" });
    const learnReactDeleteButton = deleteButtons[0]; // First delete button

    // Click the delete button
    fireEvent.click(learnReactDeleteButton);

    // Check that "Learn React" todo is no longer in the document
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();

    // Check that there are now only 2 todo items
    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(2);

    // Check that the other todos still exist
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("handles multiple todo operations correctly", () => {
    render(<TodoList />);

    // Add a new todo
    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByRole("button", { name: "Add Todo" });

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    // Should now have 4 todos
    let todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(4);

    // Toggle the new todo
    const newTodo = screen.getByText("Test Todo");
    fireEvent.click(newTodo);
    const newTodoItem = newTodo.closest("li");
    expect(newTodoItem).toHaveClass("completed");

    // Delete the "Write Tests" todo
    const deleteButtons = screen.getAllByRole("button", { name: "Delete" });
    const writeTestsDeleteButton = deleteButtons[2]; // Third delete button
    fireEvent.click(writeTestsDeleteButton);

    // Should now have 3 todos and "Write Tests" should be gone
    todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(3);
    expect(screen.queryByText("Write Tests")).not.toBeInTheDocument();

    // Other todos should still be there
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("handles whitespace in todo input correctly", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByRole("button", { name: "Add Todo" });

    // Try to add a todo with only whitespace
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(addButton);

    // Should not add a new todo
    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(3);

    // Add a todo with leading/trailing whitespace
    fireEvent.change(input, { target: { value: "  Trimmed Todo  " } });
    fireEvent.click(addButton);

    // Should add the todo with trimmed text
    expect(screen.getByText("Trimmed Todo")).toBeInTheDocument();
    expect(screen.queryByText("  Trimmed Todo  ")).not.toBeInTheDocument();

    const updatedTodoItems = screen.getAllByRole("listitem");
    expect(updatedTodoItems).toHaveLength(4);
  });
});
