import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { describe, expect, it } from "@jest/globals";

import AddProject from "../AddProject/AddProject";

configure({ adapter: new Adapter() });
describe("Testing for AddProject component", () => {
  it("Dialog exists", () => {
    const wrapper = shallow(<AddProject />);
    expect(wrapper.find("Dialog")).toMatchSnapshot();
  });
  it("Dialog has form", () => {
    const wrapper = shallow(<AddProject />);
    expect(wrapper.find("form")).toMatchSnapshot();
  });
  it("Dialog has taxtfields", () => {
    const wrapper = shallow(<AddProject />);
    expect(wrapper.find("TextField")).toMatchSnapshot();
  });
  it("Dialog has buttons", () => {
    const wrapper = shallow(<AddProject />);
    expect(wrapper.find("Button")).toMatchSnapshot();
  });
});
