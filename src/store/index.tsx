// src/editor/stores/components.ts
import { create } from "zustand";

import { getParentById } from "e/utils/find";

interface State {
  components: IComponent[];
}

interface Action {
  /**
   * 添加组件
   * @param component 组件属性
   * @returns
   */
  addComponent: (component: IComponent, parentId: number | undefined) => void;
}

export const useComponets = create<State & Action>((set) => ({
  components: [],
  addComponent: (component, parentId) =>
    set((state) => {
      if (parentId) {
        const parentWrapper = getParentById(parentId, state.components);

        if (parentWrapper) {
          if (parentWrapper.children && parentWrapper.children.length) {
            parentWrapper.children = [...parentWrapper.children, component];
          } else {
            parentWrapper.children = [component];
          }
        }

        return { components: [...state.components] };
      }

      return { components: [...state.components, component] };
    }),
}));
