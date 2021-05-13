import { render, screen } from "@testing-library/react";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  test("renders checked by prop", () => {
    render(<Checkbox isChecked>File 2020 Taxes</Checkbox>);

    const CheckboxItem = screen.getByTestId("checkbox");
    expect(CheckboxItem).toBeInTheDocument();
    expect(CheckboxItem.firstChild).toHaveAttribute("checked");
    expect(screen.getByText("File 2020 Taxes")).toBeInTheDocument();

    const label = screen.getByTestId("checkbox-label");
    expect(label.firstChild).toHaveTextContent("File 2020 Taxes");
  });
});
