import { Space as AntdSpace } from "antd";
import { useDrop } from "react-dnd";
import { ItemType } from "e/constant";

interface IProps {
  children: any;
  id: number;
}

const Space: FC<IProps> = ({ children, id }) => {
  const [{ canDrop }, dropRef] = useDrop(() => ({
    accept: [ItemType.Space, ItemType.Button],
    drop: (_, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      console.log("id ==> :", id);
      return {
        parentId: id,
      };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  if (!children?.length) {
    return (
      <AntdSpace
        ref={dropRef}
        className='p-[16px]'
        style={{ border: canDrop ? "1px solid #ccc" : "none" }}
      >
        暂无内容
      </AntdSpace>
    );
  }

  return (
    <AntdSpace
      ref={dropRef}
      className='p-[16px]'
      style={{ border: canDrop ? "1px solid #ccc" : "none" }}
    >
      {children}
    </AntdSpace>
  );
};

export default Space;
