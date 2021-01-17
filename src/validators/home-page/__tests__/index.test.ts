import isValidHomePageConfig from "../";

describe("isValidHomePageConfig()", () => {
  const configurationWithMissingField = {
    title: "My web site title",
    description:
      "This is my web site, I share engineering content and blog with it",
    favicon: "/path/to/my/favicon.png",
  };

  xtest("should throw when a field is missing in the configuration", () => {
    // The missing field here is the language
    expect(() =>
      isValidHomePageConfig(configurationWithMissingField as any)
    ).toThrowError("Some error");
  });
});
