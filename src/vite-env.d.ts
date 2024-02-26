/// <reference types="vite/client" />

import type { FC as ReactFC, ReactNode as RN } from "react";
import type { IComponent as IC } from "e/types";
declare global {
  type FC<T = any> = ReactFC<T>;
  type ReactNode = RN;
  type IComponent = IC;
}

