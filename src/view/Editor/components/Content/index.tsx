import "./index.scss";

import { createElement } from "react";

import { useDrop } from "react-dnd";
import { ItemType } from "e/constant";
import { useComponets } from "@/store";

import { ComponentMap } from "e/constant";

const Content: FC = () => {
  const list = useComponets((state) => state.components);

  function renderComponents(components: IComponent[]): ReactNode {
    return components.map((component: IComponent) => {
      if (!ComponentMap[component.name]) {
        return null;
      }

      if (ComponentMap[component.name]) {
        return createElement(
          ComponentMap[component.name] as string,
          { key: component.id, id: component.id, ...component.props },
          component.props.children || renderComponents(component.children || []),
        );
      }
    });
  }

  const [{ canDrop }, dropRef] = useDrop(() => ({
    accept: [ItemType.Button, ItemType.Space],
    drop: (_, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }

      return {
        parentId: 0,
      };
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      style={{ border: canDrop ? "1px solid red" : "none" }}
      className=' content h-[100%]'
    >
      {renderComponents(list)}
    </div>
  );
};

export default Content;
