import React from "react";
import AddProject from "../AddProject/AddProject";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { stringify } from "querystring";

type project = {
  "https://schema.org/Project#name": string;
  "https://schema.org/Organization#name": string;
  "https://schema.org/Person#name": String;
};

configure({ adapter: new Adapter() });
describe('Testing AddProject component")', () => {
  it("Modal exists", () => {
    let project = {
      "https://schema.org/Project#name": "Test project",
      "https://schema.org/Organization#name": "Test customer",
      "https://schema.org/Person#name": "Test person",
    };
    const wrapper = shallow(<AddProject />);
    expect(wrapper.find("Modal")).toHaveLength(1);
  });
});
