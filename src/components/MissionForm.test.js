import React from "react";
import { render } from "@testing-library/react";
import MissionForm from "./MissionForm";

test("Mission Form renders correctly", () => {
  const mockGetData = jest.fn();
  const { getByText, queryByText } = render(
    <MissionForm getData={mockGetData} isFetchingData={false} />,
  );

  // test that the button is rendered, and the loading state is not
  getByText(/get data/i);
  // the above line runs the assertion by itself, it's a shorthand for below
  // expect(getByText(/get data/i)).toBeInTheDocument();
  expect(queryByText(/we are fetching data/i)).toBeNull();
});

test("Component transitions to loading state when isFetchingData is true", () => {
  const mockGetData = jest.fn();
  const { getByText, queryByText, rerender } = render(
    <MissionForm getData={mockGetData} isFetchingData={false} />,
  );

  // test that the button is rendered, and the loading state is not
  getByText(/get data/i);
  expect(queryByText(/we are fetching data/i)).toBeNull();

  rerender(<MissionForm getData={mockGetData} isFetchingData={true} />);
  getByText(/we are fetching data/i);
  expect(queryByText(/get data/i)).toBeNull();
});

// TODO: add a test to test the transition from the loading state back to the resting state
// TODO: look through this test file and
