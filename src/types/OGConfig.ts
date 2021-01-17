import {
  MIN_PAGE_TITLE_LENGTH,
  MIN_FILE_PATH_NAME_LENGTH,
  MIN_URL_LENGTH,
  MIN_PAGE_DESCRIPTION_LENGTH,
} from "utils/constants";

/**
 * For further information about the OG protocol, check https://ogp.me
 *
 * The type field is not supported (yet) as it requires further business logic (more about this here https://ogp.me/#types)
 */
export default interface OGConfig {
  title: string;
  image: string;
  url: string;
  description: string;
}

export const oGConfigValidator = {
  title: [
    true,
    (title: string) =>
      typeof title === "string" && title.length >= MIN_PAGE_TITLE_LENGTH,
  ],
  image: [
    true,
    (image: string) =>
      typeof image === "string" && image.length >= MIN_FILE_PATH_NAME_LENGTH,
  ],
  url: [
    true,
    (url: string) => typeof url === "string" && url.length >= MIN_URL_LENGTH,
  ],
  description: [
    true,
    (description: string) =>
      typeof description === "string" &&
      description.length >= MIN_PAGE_DESCRIPTION_LENGTH,
  ],
};

export const isValidOGConfig = (ogConfig: OGConfig): Array<string> => {
  const ogConfigFields = Object.keys(oGConfigValidator);

  if (!ogConfig || typeof ogConfig !== "object") {
    return ogConfigFields;
  }

  const ret = [];

  ogConfigFields.forEach((field) => {
    const [isMandatory, isValid] = oGConfigValidator[field];

    if (
      (isMandatory && !ogConfig[field]) ||
      (ogConfig[field] && !isValid(ogConfig[field]))
    ) {
      ret.push(field);
    }
  });

  return ret;
};
