import React, { Component } from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act } from "react-dom/test-utils";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import AddTask from "../deliveryphase/project/AddTask";
import { createRender, createShallow, createMount } from "@material-ui/core/test-utils";

configure({ adapter: new Adapter() });
describe('Testing EditPhase component")', () => {
  let render: any;
  let shallow: any;

  const props = {
    url: "https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation/",
    open: true,
  };

  beforeAll(() => {
    shallow = createShallow();
    render = createMount();
  });

  it("Can render AddTask dialog", () => {
    act(() => {
      //act need to be used when state of app changes permanantly
      const wrapper2 = render(<AddTask {...props} />);
      expect(wrapper2.find("AddTask")).toHaveLength(1);
    });
  });
});
