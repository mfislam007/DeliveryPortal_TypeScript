import React, { Component } from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import EditPhase from "../deliveryphase/project/EditPhase";
import { createRender } from "@material-ui/core/test-utils";

configure({ adapter: new Adapter() });
describe('Testing EditPhase component")', () => {
  let render: any;
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

  beforeAll(() => {
    render = createRender();
  });

  it("Can render EditPhase", () => {
    const wrapper2 = render(
      <EditPhase
        phase="https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation/"
        start={new Date(2020, 1, 1)}
        end={new Date(2020, 2, 2)}
        open={true}
        toggle={null}
      />
    );
  });
});
