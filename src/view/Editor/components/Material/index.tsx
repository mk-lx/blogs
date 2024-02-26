import "./index.scss";
import { ItemType } from "e/constant";
import Wrapper from "e/components/Wrapper";
import { useComponets } from "@/store";
import type { IDropResult } from "e/types";
const Material = () => {
  const addComponents = useComponets((state) => state.addComponent);
  const onDragEnd = (dropResult: IDropResult) => {
    addComponents(
      {
        id: new Date().getTime(),
        name: dropResult.name,
        props: dropResult.props,
      },
      dropResult.parentId,
    );
  };
  return (
    <div className='material flex p-[10px] gap-4 flex-wrap'>
      <Wrapper onDragEnd={onDragEnd} description='按钮' name={ItemType.Button} />
      <Wrapper onDragEnd={onDragEnd} description='间距' name={ItemType.Space} />
    </div>
  );
};

export default Material;
