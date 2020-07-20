import React from "react";
import { act } from "react-dom/test-utils";
import { createRender, createShallow, createMount } from "@material-ui/core/test-utils";

import GetPhaseTasks from "../GetPhaseTasks";

describe('Testing GetPhaseTasks component")', () => {
  let render: any;
  let shallow: any;
  const props = {
    currentPhase: {
      label: "Prep",
      color: "pink",
    },
  };

  beforeAll(() => {
    shallow = createShallow();
    render = createMount();
  });

  it("Should have RenderTasksList component", () => {
    const wrapper = shallow(<GetPhaseTasks {...props} />);
    expect(wrapper.find("RenderTaskList")).toHaveLength(1);
  });

  it("Can render GetPhaseTasks component", () => {
    act(() => {
      const wrapper2 = render(<GetPhaseTasks {...props} />);
      expect(wrapper2.find("GetPhaseTasks")).toHaveLength(1);
    });
  });
});
