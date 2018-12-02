import React from "react";
import { shallow, mount } from "enzyme";
import "../setupTests";
import Header from "./header.js";

describe("<Header />", () => {
  it("Smoke Test", () => {
    shallow(<Header />);
  });
});
