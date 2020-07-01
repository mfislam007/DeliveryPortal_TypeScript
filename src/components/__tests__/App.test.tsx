import React from "react";
import { shallow, mount } from "enzyme";
import { describe, expect, it } from "@jest/globals";

import App from "../App";

describe("'App' component", () => {
  describe("Unit tests", () => {
    it("shallow renders without crashing", () => {
      shallow(<App />);
    });
  });

  describe("Integration tests", () => {
    it("mounts in a full DOM", () => {
      expect(mount(<App />).find(App).length).toBe(1);
    });
  });
});
