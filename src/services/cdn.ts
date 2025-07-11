type Environment =
  | "development"
  | "integration"
  | "stage"
  | "demo"
  | "production";

const CDN_DEV_BASE = "cdn.dev.net";
const CDN_PROD_BASE = "cdn.net";

const getCdnBaseUrl = (environment: Environment) => {
  return environment === "production" || environment === "demo"
    ? CDN_PROD_BASE
    : CDN_DEV_BASE;
};

const getWidgetCdnUrl = (
  widgetId: string,
  widgetVersion: string,
  file: "1fe-bundle" | "1fe-contract" | "package",
  environment: Environment = "integration", // TODO
): string => {
  getCdnBaseUrl(environment); // Reference to avoid unused variable warning

  if (file === "package") {
    return `https://placeholder/package.json`;
  }

  return `https://placeholder{file}.js`;
};

export { getCdnBaseUrl, getWidgetCdnUrl, type Environment };
