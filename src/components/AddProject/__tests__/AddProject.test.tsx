import React from "react";
import { configure, shallow } from "enzyme";
import { describe, expect, it } from "@jest/globals";

import AddProject from "../AddProject";

describe("Testing for AddProject component", () => {
  const wrapper = shallow(<AddProject />);

  it("Dialog exists", () => {
    expect(wrapper.find("Dialog")).toMatchSnapshot();
  });

  it("Dialog has form", () => {
    expect(wrapper.find("form")).toMatchSnapshot();
  });

  it("Dialog has taxtfields", () => {
    expect(wrapper.find("TextField")).toMatchSnapshot();
  });

  it("Dialog has buttons", () => {
    expect(wrapper.find("Button")).toMatchSnapshot();
  });
});
