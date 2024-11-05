// import { render, screen } from "@testing-library/react";
// import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// App.test.js
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store"; // Adjust the path based on your store's location

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Replace this with your actual test, e.g., checking for text or elements in App
  expect(getByText(/learn react/i)).toBeInTheDocument();
});
