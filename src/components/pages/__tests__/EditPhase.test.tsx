import React, { Component } from "react";
import { createShallow, createMount } from "@material-ui/core/test-utils";
import { act } from "react-dom/test-utils";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import EditPhase from "../deliveryphase/project/EditPhase";

configure({ adapter: new Adapter() });

describe("'EditPhase' component", () => {
  let render: any;
  let shallow: any;

  const props = {
    phase: "https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation/",
    start: new Date(2020, 1, 1),
    end: new Date(2020, 2, 2),
    open: true,
    toggle: jest.fn(),
    editTimes: jest.fn(),
  };

  beforeAll(() => {
    shallow = createShallow();
    render = createMount();
  });

  describe("Unit tests", () => {
    it("has three 'div's", () => {
      const wrapper = shallow(<EditPhase {...props} />);
      expect(wrapper.find("div")).toHaveLength(3);
    });
  });

  describe("Integration tests", () => {
    it("mounts in a full DOM", () => {
      act(() => {
        const wrapper = render(<EditPhase {...props} />);
        expect(wrapper.find("EditPhase")).toHaveLength(1);
      });
    });
  });
});
