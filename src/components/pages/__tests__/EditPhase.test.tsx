import React, { Component } from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import EditPhase from "../deliveryphase/project/EditPhase";

configure({ adapter: new Adapter() });
describe('Testing EditPhase component")', () => {
  it("UI has three divs", () => {
    const wrapper = shallow(
      <EditPhase
        phase="https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation/"
        start={new Date(2020, 1, 1)}
        end={new Date(2020, 2, 2)}
        open={true}
        toggle={null}
      />
    );
    expect(wrapper.find("div")).toHaveLength(3);
  });
});
