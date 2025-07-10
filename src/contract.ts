import { PlatformPropsType } from "@1fe/shell";

export type HostPropsContract = {};

export interface WidgetProps {
  host: HostPropsContract;
  platform: PlatformPropsType;
}
