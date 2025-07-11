import { propsValidation } from "../store/utils";
import { expect, describe, test } from "@jest/globals";

describe("WidgetProps propsValidation", () => {
  test("Accepts Valid Props", () => {
    expect(
      propsValidation(
        `{"kitchenSink": "testing","anotherKey":  () => Promise.resolve("test"),anotherKey: 'valid'}`,
      ),
    ).toBeTruthy();

    expect(
      propsValidation(`{"kitchenSink": "testing","anotherKey": "valid"}`),
    ).toBeTruthy();
  });

  test("Rejects Invalid Props", () => {
    expect(
      propsValidation(
        `{"kitchenSink": "testing""anotherKey":  () => Promise.resolve('test')anotherKey: 'invalid'}`,
      ),
    ).toBeFalsy();

    expect(
      propsValidation(`{"kitchenSink": "testing""anotherKey": invalid}`),
    ).toBeFalsy();

    expect(propsValidation(`() => console.log("code injection")`)).toBeFalsy();
  });
});
