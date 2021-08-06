import React from "react";
import { render } from "@testing-library/react";
import TodoAddForm from "./TodoAddForm";

describe("<TodoAddForm />", () => {
  it("has a input and button", () => {
    const { getByText, getByRole } = render(<TodoAddForm />);
    getByRole("todoInput"); // input 이 있는지 확인
    getByText("Confirm"); // button이 있는지 확인
  });
});
