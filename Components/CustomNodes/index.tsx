import { FC } from "react";
import { Handle, HandleType, NodeProps, Position } from "reactflow";

interface HandleConfig {
  position: Position;
  type: HandleType;
}

const CustomNode: FC<NodeProps> = ({ data }) => {
  const handles: HandleConfig[] = data?.handles || [];

  const renderHandles = () => {
    return handles.map((handle) => (
      <Handle
        key={handle.position}
        type={handle.type}
        position={handle.position}
      />
    ));
  };

  return (
    <>
      {renderHandles()}
      <div>
        <div>{data.label}</div>
      </div>
    </>
  );
};

export default CustomNode;
