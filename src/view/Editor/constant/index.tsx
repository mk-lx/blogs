import { Button } from "antd";
import Space from "e/plugins/Space";

export const ItemType = {
  Button: "Button",
  Space: "Space",
};

export const ComponentMap: { [key: string]: any } = {
  Button: Button,
  Space: Space,
};
