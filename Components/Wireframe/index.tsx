"use client";
import React, { useState } from "react";
import ReactFlow, { Node } from "reactflow";
import "reactflow/dist/style.css";
import { initialEdges } from "@/app/etc/edges";
import { initialNodes } from "@/app/etc/nodes";

import style from "./wireframe.module.scss";
import CustomNode from "../CustomNodes";

function Wireframe() {
  const [displayedBoxContent, setDisplayedBoxContent] = useState<string | null>(
    null
  );

  const handleNodeMouseEnter = (event: React.MouseEvent, node: Node) => {
    setDisplayedBoxContent(node.data.message);
  };

  const handleNodeMouseLeave = () => {
    setDisplayedBoxContent(null);
  };

  const nodeTypes = {
    custom: CustomNode,
  };

  const defaultEdgeOptions = {
    animated: true,
    type: "beziers",
  };

  return (
    <div className={style.wireframe}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        onNodeMouseEnter={handleNodeMouseEnter}
        onNodeMouseLeave={handleNodeMouseLeave}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        fitView
      ></ReactFlow>
      {displayedBoxContent && (
        <div className={style.displayBox}>{displayedBoxContent}</div>
      )}
    </div>
  );
}

export default Wireframe;
