import React, { Component } from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act } from "react-dom/test-utils";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import EditPhase from "../deliveryphase/project/EditPhase";
import { createRender, createShallow, createMount } from "@material-ui/core/test-utils";

configure({ adapter: new Adapter() });
describe('Testing EditPhase component")', () => {
  let render: any;
  let shallow: any;
  it("UI has three divs", () => {
    const wrapper = shallow(
      <EditPhase
        phase="https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation/"
        start={new Date(2020, 1, 1)}
        end={new Date(2020, 2, 2)}
        open={true}
        toggle={jest.fn()}
      />
    );
    expect(wrapper.find("div")).toHaveLength(3);
  });

  beforeAll(() => {
    shallow = createShallow();
    render = createMount();
  });
  //https://stackoverflow.com/questions/50916374/material-ui-enzyme-testing-component
  it("Can render EditPhase", () => {
    act(() => {
      const wrapper2 = render(
        <EditPhase
          phase="https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation/"
          start={new Date(2020, 1, 1)}
          end={new Date(2020, 2, 2)}
          open={true}
          toggle={jest.fn()}
        />
      );
      expect(wrapper2.find("EditPhase")).toHaveLength(1);
    });
  });
});
