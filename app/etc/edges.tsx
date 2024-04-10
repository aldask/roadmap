import { Edge } from "reactflow";

export const initialEdges: Edge[] = [
  { id: "main0", source: "front-end-title", target: "learn-the-basics-title" },
  { id: "main1", source: "learn-the-basics-title", target: "main-artery0" },
  { id: "main2", source: "main-artery0", target: "getting-deeper-title" },
  { id: "main3", source: "getting-deeper-title", target: "main-artery1" },
  { id: "main4", source: "main-artery1", target: "main-artery2" },
  { id: "main5", source: "main-artery2", target: "main-artery3" },

  { id: "point0", source: "main-artery0", target: "html" },
  { id: "point1", source: "main-artery0", target: "css" },
  { id: "point2", source: "main-artery0", target: "js" },

  { id: "point3", source: "main-artery1", target: "css0" },
  { id: "point4", source: "css0", target: "responsive" },
  { id: "point5", source: "css0", target: "preprocessors-title" },
  { id: "point6", source: "css0", target: "choose-framework0-title" },
  { id: "point7", source: "preprocessors-title", target: "sass" },
  { id: "point8", source: "choose-framework0-title", target: "foundation" },

  { id: "point9", source: "main-artery2", target: "css1" },
  { id: "point9.1", source: "main-artery2", target: "svg" },
  { id: "point9.2", source: "main-artery2", target: "js1" },
  { id: "point10", source: "css1", target: "methodologies" },
  { id: "point11", source: "methodologies", target: "oocss" },
  { id: "point12", source: "css1", target: "dive-deep-css3" },
  { id: "point13", source: "svg", target: "d3" },
  { id: "point14", source: "js1", target: "design-patterns" },

  { id: "point15", source: "main-artery1", target: "js2" },
  { id: "point16", source: "js2", target: "es6" },
  { id: "point17", source: "js2", target: "ts" },

  { id: "point18", source: "js2", target: "task-runners-title" },
  { id: "point19", source: "task-runners-title", target: "npm-scripts" },

  { id: "point20", source: "js2", target: "package-manager-title" },
  { id: "point21", source: "package-manager-title", target: "yarn" },

  { id: "point22", source: "js2", target: "testing-title" },
  { id: "point23", source: "testing-title", target: "jest" },

  { id: "point24", source: "js2", target: "module-title" },
  { id: "point25", source: "module-title", target: "webpack" },

  { id: "point26", source: "js2", target: "choose-framework1-title" },
  { id: "point27", source: "choose-framework1-title", target: "angular" },

  { id: "point28", source: "angular", target: "rxjs" },
  { id: "point29", source: "react", target: "flux" },
];
