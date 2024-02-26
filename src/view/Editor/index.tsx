import Header from "./components/Header";
import Material from "./components/Material";
import Set from "./components/Set";
import Content from "./components/Content";

import { Allotment } from "allotment";
import "allotment/dist/style.css";
import "./index.scss";

const Page = () => {
  return (
    <div className='editor'>
      <Header></Header>

      <Allotment className='editor_allotment'>
        <Allotment.Pane preferredSize={200} maxSize={200} minSize={100}>
          <Material />
        </Allotment.Pane>
        <Allotment.Pane>
          <Content />
        </Allotment.Pane>
        <Allotment.Pane preferredSize={200} maxSize={300} minSize={200}>
          <Set />
        </Allotment.Pane>
      </Allotment>
    </div>
  );
};

export default Page;
