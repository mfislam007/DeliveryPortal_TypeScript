import React from "react";
import AddProject from "../AddProject/AddProject";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe('Testing AddProject component")', () => {
  it("Modal exists", () => {
    const wrapper = shallow(<AddProject />);
    expect(wrapper.find("Modal")).toHaveLength(1);
  });
  it("Modal has one form", () => {
    const wrapper = shallow(<AddProject />);
    expect(wrapper.find("form")).toHaveLength(1);
  });
  it("Modal has three input fields", () => {
    const wrapper = shallow(<AddProject />);
    expect(wrapper.find("input")).toHaveLength(3);
  });
  it("Modal has two buttons, this is failing because we need to remove trigger model button finally", () => {
    const wrapper = shallow(<AddProject />);
    expect(wrapper.find("button")).toHaveLength(2);
  });
});
