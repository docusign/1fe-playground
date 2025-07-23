import { OneFeRuntimeConfigObject, TypedOneFeConfiguration } from "@1fe/cli";
import { Environments, getBaseConfig } from "@1fe/sample-widget-base-config"; // this is the redistributed package for the organization

const commonRuntimeConfig: OneFeRuntimeConfigObject = {
  dependsOn: {
    widgets: [
      {
        widgetId: "@1fe/widget-starter-kit",
      },
    ],
  },
};

const configuration: TypedOneFeConfiguration<Environments> = {
  baseConfig: getBaseConfig,
  runtimeConfig: {
    development: commonRuntimeConfig,
    integration: commonRuntimeConfig,
    production: commonRuntimeConfig,
  },
};

export default configuration;
