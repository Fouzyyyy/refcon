import { oGConfigValidator, isValidOGConfig } from "../OGConfig";

describe("isValidOGConfig()", () => {
  test("should return an array with all the fields", () => {
    expect(isValidOGConfig(false as any)).toStrictEqual(
      Object.keys(oGConfigValidator)
    );
  });

  test("should return an array with the missing fields (all of them in this case)", () => {
    expect(isValidOGConfig({} as any)).toStrictEqual(
      Object.keys(oGConfigValidator)
    );
  });

  test("should return an array with the one missing field", () => {
    // In this case, the description field is missing
    const ogConfig = {
      title: "Page title",
      image: "/path/to/image.png",
      url: "https://www.my-url.io/",
    };

    expect(isValidOGConfig(ogConfig as any)).toStrictEqual(["description"]);
  });

  test("should return an array with the invalid fields", () => {
    const ogConfig = {
      title: 1,
      description: "",
      image: true,
      url: () => {},
    };

    expect(isValidOGConfig(ogConfig as any)).toStrictEqual(
      Object.keys(oGConfigValidator)
    );
  });

  test("should return an array with the invalid field and the missing field", () => {
    /**
     * The missing field is the image here
     *
     * The invalid field here is the canonical url
     */
    const ogConfig = {
      title: "My page title",
      description: "My web page description for the OG protocol",
      url: () => {},
    };

    expect(isValidOGConfig(ogConfig as any)).toStrictEqual(["image", "url"]);
  });
});
