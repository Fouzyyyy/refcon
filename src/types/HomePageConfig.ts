import { isValidOGConfig } from "types/OGConfig";
import {
  MIN_PAGE_TITLE_LENGTH,
  MIN_PAGE_DESCRIPTION_LENGTH,
  MIN_FILE_PATH_NAME_LENGTH,
  MIN_LANGUAGE_NAME_LENGTH,
} from "utils/constants";

import OGConfig from "./OGConfig";
import ScriptsConfig from "./ScriptsConfig";

export default interface HomePageConfig {
  title: string;
  description: string;
  favicon: string;
  language: string;
  og?: OGConfig;
  scripts?: ScriptsConfig;
  styles?: string[];
}

const homePageConfigValidator = {
  title: (title: string) => [
    true,
    typeof title === "string" && title.length > MIN_PAGE_TITLE_LENGTH,
  ],
  description: (description: string) => [
    true,
    typeof description === "string" &&
      description.length > MIN_PAGE_DESCRIPTION_LENGTH,
  ],
  favicon: (favicon: string) => [
    true,
    typeof favicon === "string" && favicon.length > MIN_FILE_PATH_NAME_LENGTH,
  ],
  language: (language: string) => [
    true,
    typeof language === "string" && language.length > MIN_LANGUAGE_NAME_LENGTH,
  ],
  og: (og: OGConfig) => [false, typeof og === "object" && isValidOGConfig(og)],
};
