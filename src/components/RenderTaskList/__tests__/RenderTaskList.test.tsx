import React from "react";
import { act } from "react-dom/test-utils";
import { Table } from "@material-ui/core";
import { createRender, createShallow, createMount } from "@material-ui/core/test-utils";

import RenderTaskList from "../RenderTaskList";

describe('Testing RenderTaskList component")', () => {
  let render: any;
  let shallow: any;
  const props = {
    phaseLabel: "Test Case",
    phaseTasks: [
      {
        id: 0,
        taskLevel: "test1",
        taskType: "testing",
        taskAuthor: "Jane Doe",
        completion: 0,
      },
    ],
    handleChange: jest.fn(),
    phaseColor: "pink",
  };

  beforeAll(() => {
    shallow = createShallow();
    render = createMount();
  });

  it("Should have a Table component", () => {
    const wrapper = render(<RenderTaskList {...props} />);
    expect(wrapper.find(Table)).toHaveLength(1);
  });

  it("Can render RenderTaskList component", () => {
    const wrapper2 = render(<RenderTaskList {...props} />);

    expect(wrapper2.find("RenderTaskList")).toHaveLength(1);
  });
});
