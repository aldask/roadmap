"use client";
import { edges } from "@/app/etc/edges";
import { nodes } from "@/app/etc/nodes";
import React from "react";
import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

function FrontEndCoursePath() {

  return (
    <div style={{ height: "100vh"}}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default FrontEndCoursePath;