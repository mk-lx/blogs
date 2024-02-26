import { useDrag } from "react-dnd";
import { ItemType } from "e/constant";

interface IWrapperProps {
  // 组件名称
  name: string;
  // 组件描述
  description: string;
  // 拖拽结束回调
  onDragEnd: any;
}

const Wrapper: FC<IWrapperProps> = ({ name, description, onDragEnd }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: name,
    end: (_, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log("dropResult ==> :", dropResult);
      if (!dropResult) return;

      onDragEnd &&
        onDragEnd({
          name,
          props: name === ItemType.Button ? { children: "按钮" } : {},
          ...dropResult,
        });
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      ref={dragRef}
      className='border-dashed border-[1px] border-[gray] bg-white cursor-move py-[8px] h-20 px-[20px] rounded-lg'
      style={{
        opacity,
      }}
    >
      {description}
    </div>
  );
};

export default Wrapper;
