import { Node, Position } from "reactflow";
import style from "../../Components/CustomNodes/custom-node.module.scss";

export const initialNodes: Node[] = [
  {
    id: "front-end-title",
    data: {
      label: "Front-end roadmap",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "bottom", type: "source" }],
    },
    position: { x: 100, y: 100 },
    type: "custom",
    className: style.customNode__h1,
  },
  {
    id: "learn-the-basics-title",
    data: {
      label: "Learn the Basics",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: 150, y: 250 },
    type: "custom",
    className: style.customNode__h2,
  },
  {
    id: "main-artery0",
    data: {
      label: "○",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: 240, y: 400 },
    type: "custom",
    className: style.customNode__blank,
  },
  {
    id: "getting-deeper-title",
    data: {
      label: "Getting deeper",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: 170, y: 600 },
    type: "custom",
    className: style.customNode__h2,
  },
  {
    id: "main-artery1",
    data: {
      label: "○",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: 140, y: 780 },
    type: "custom",
    className: style.customNode__blank,
  },
  {
    id: "main-artery2",
    data: {
      label: "○",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: 110, y: 1400 },
    type: "custom",
    className: style.customNode__blank,
  },
  {
    id: "main-artery3",
    data: {
      label: "☆",
      handles: [{ position: "top", type: "target" }],
    },
    position: { x: 70, y: 2100 },
    type: "custom",
    className: style.customNode__blank,
  },

  {
    id: "html",
    data: {
      label: "HTML",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "right", type: "target" }],
    },
    position: { x: -70, y: 400 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "css",
    data: {
      label: "CSS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "right", type: "target" }],
    },
    position: { x: -70, y: 450 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "js",
    data: {
      label: "JavaScript",
      handles: [{ position: "right", type: "target" }],
    },
    position: { x: -70, y: 500 },
    type: "custom",
    className: style.customNode__yellow,
  },

  {
    id: "css0",
    data: {
      label: "CSS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "left", type: "target" },
        { position: "right", type: "source" },
      ],
    },
    position: { x: 350, y: 820 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "responsive",
    data: {
      label: "Responsive Web",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "right", type: "target" }],
    },
    position: { x: 420, y: 720 },
    type: "custom",
    className: style.customNode__yellow,
  },

  {
    id: "preprocessors-title",
    data: {
      label: "Preprocessors",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: 580, y: 880 },
    type: "custom",
    className: style.customNode__h2,
  },
  {
    id: "sass",
    data: {
      label: "Sass",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "top", type: "target" }],
    },
    position: { x: 560, y: 980 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "less",
    data: {
      label: "Less",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 560, y: 1030 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "stylus",
    data: {
      label: "Stylus",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 560, y: 1080 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "postcss",
    data: {
      label: "PostCSS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 560, y: 1130 },
    type: "custom",
    className: style.customNode__gray,
  },

  {
    id: "choose-framework0-title",
    data: {
      label: "Choose Framework",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: 320, y: 920 },
    type: "custom",
    className: style.customNode__h2,
  },
  {
    id: "foundation",
    data: {
      label: "Foundation",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "top", type: "target" }],
    },
    position: { x: 310, y: 1030 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "bootstrap",
    data: {
      label: "Bootstrap",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 310, y: 1080 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "materialize-css",
    data: {
      label: "Materialize CSS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 310, y: 1130 },
    type: "custom",
    className: style.customNode__orange,
  },
  {
    id: "semantic-ui",
    data: {
      label: "Semantic UI",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 310, y: 1180 },
    type: "custom",
    className: style.customNode__orange,
  },

  {
    id: "js2",
    data: {
      label: "JavaScript",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "right", type: "target" },
        { position: "left", type: "source" },
      ],
    },
    position: { x: -100, y: 840 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "es6",
    data: {
      label: "ES6",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "bottom", type: "target" }],
    },
    position: { x: -200, y: 740 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "ts",
    data: {
      label: "TypeScript",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "top", type: "target" }],
    },
    position: { x: -10, y: 940 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "flow",
    data: {
      label: "Flow",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -10, y: 990 },
    type: "custom",
    className: style.customNode__gray,
  },

  {
    id: "task-runners-title",
    data: {
      label: "Task Runners",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "right", type: "target" },
        { position: "left", type: "source" },
      ],
    },
    position: { x: -350, y: 820 },
    type: "custom",
    className: style.customNode__h2,
  },
  {
    id: "npm-scripts",
    data: {
      label: "npm scripts",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "top", type: "target" }],
    },
    position: { x: -450, y: 890 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "gulp",
    data: {
      label: "gulp",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -450, y: 940 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "grunt",
    data: {
      label: "Grunt",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -450, y: 990 },
    type: "custom",
    className: style.customNode__gray,
  },

  {
    id: "package-manager-title",
    data: {
      label: "Package Manager",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: -410, y: 1080 },
    type: "custom",
    className: style.customNode__h2,
  },
  {
    id: "yarn",
    data: {
      label: "Yarn",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "top", type: "target" }],
    },
    position: { x: -450, y: 1160 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "npm",
    data: {
      label: "npm",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -450, y: 1210 },
    type: "custom",
    className: style.customNode__yellow,
  },

  {
    id: "testing-title",
    data: {
      label: "Testing",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: -210, y: 1020 },
    type: "custom",
    className: style.customNode__h2,
  },
  {
    id: "jest",
    data: {
      label: "Jest",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "top", type: "target" }],
    },
    position: { x: -230, y: 1100 },
    type: "custom",
    className: style.customNode__orange,
  },
  {
    id: "mocha",
    data: {
      label: "Mocha",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -230, y: 1150 },
    type: "custom",
    className: style.customNode__orange,
  },
  {
    id: "jasmine",
    data: {
      label: "Jasmine",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -230, y: 1200 },
    type: "custom",
    className: style.customNode__orange,
  },
  {
    id: "enzyme",
    data: {
      label: "Enzyme",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -230, y: 1250 },
    type: "custom",
    className: style.customNode__orange,
  },

  {
    id: "module-title",
    data: {
      label: "Module Loader/Bundler",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: -30, y: 1200 },
    type: "custom",
    className: style.customNode__h2,
  },
  {
    id: "webpack",
    data: {
      label: "webpack",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "top", type: "target" }],
    },
    position: { x: -50, y: 1300 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "rollup",
    data: {
      label: "rollup",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -50, y: 1350 },
    type: "custom",
    className: style.customNode__orange,
  },
  {
    id: "parcel",
    data: {
      label: "Parcel",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -50, y: 1400 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "requirejs",
    data: {
      label: "RequireJS / AMD",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -50, y: 1450 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "browserify",
    data: {
      label: "Browserify",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -50, y: 1500 },
    type: "custom",
    className: style.customNode__gray,
  },

  {
    id: "choose-framework1-title",
    data: {
      label: "Choose a Framework",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "top", type: "target" },
        { position: "bottom", type: "source" },
      ],
    },
    position: { x: -400, y: 1350 },
    type: "custom",
    className: style.customNode__h2,
  },
  {
    id: "angular",
    data: {
      label: "Angular",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "top", type: "target" },
        { position: "right", type: "source" },
      ],
    },
    position: { x: -420, y: 1450 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "react",
    data: {
      label: "React",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "left", type: "source" }],
    },
    position: { x: -420, y: 1500 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "vue",
    data: {
      label: "Vue.js",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -420, y: 1550 },
    type: "custom",
    className: style.customNode__orange,
  },
  {
    id: "preact",
    data: {
      label: "Preact",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -420, y: 1600 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "ember",
    data: {
      label: "Ember JS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -420, y: 1650 },
    type: "custom",
    className: style.customNode__gray,
  },

  {
    id: "rxjs",
    data: {
      label: "RxJS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "top", type: "target" }],
    },
    position: { x: -290, y: 1710 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "ts1",
    data: {
      label: "TypeScript",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -290, y: 1760 },
    type: "custom",
    className: style.customNode__yellow,
  },

  {
    id: "flux",
    data: {
      label: "Flux",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "top", type: "target" }],
    },
    position: { x: -595, y: 1720 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "redux",
    data: {
      label: "Redux",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -595, y: 1770 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "mobx",
    data: {
      label: "Mobx",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: -595, y: 1820 },
    type: "custom",
    className: style.customNode__orange,
  },

  {
    id: "css1",
    data: {
      label: "CSS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "left", type: "target" },
        { position: "top", type: "source" },
      ],
    },
    position: { x: 380, y: 1500 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "svg",
    data: {
      label: "SVG",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "left", type: "target" },
        { position: "right", type: "source" },
      ],
    },
    position: { x: 380, y: 1550 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "js1",
    data: {
      label: "JavaScript",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "left", type: "target" },
        { position: "right", type: "source" },
      ],
    },
    position: { x: 380, y: 1600 },
    type: "custom",
    className: style.customNode__yellow,
  },

  {
    id: "methodologies",
    data: {
      label: "Methodologies",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [
        { position: "left", type: "target" },
        { position: "right", type: "source" },
      ],
    },
    position: { x: 450, y: 1380 },
    type: "custom",
    className: style.customNode__h2,
  },
  {
    id: "oocss",
    data: {
      label: "OOCSS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "left", type: "target" }],
    },
    position: { x: 680, y: 1340 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "bem",
    data: {
      label: "BEM",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 680, y: 1290 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "suitcss",
    data: {
      label: "SUITCSS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 680, y: 1240 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "smacss",
    data: {
      label: "SMACSS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 680, y: 1390 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "systematic-css",
    data: {
      label: "Systematic CSS",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 680, y: 1440 },
    type: "custom",
    className: style.customNode__gray,
  },

  {
    id: "dive-deep-css3",
    data: {
      label: "Dive Deep CSS3",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "left", type: "target" }],
    },
    position: { x: 750, y: 1550 },
    type: "custom",
    className: style.customNode__yellow,
  },
  {
    id: "gradients",
    data: {
      label: "Gradients",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 750, y: 1600 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "transform",
    data: {
      label: "Transform",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 750, y: 1650 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "transitions",
    data: {
      label: "Transitions",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 750, y: 1700 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "flexbox",
    data: {
      label: "Flexbox",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 595, y: 1600 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "rotate",
    data: {
      label: "Rotate",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 595, y: 1650 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "scale",
    data: {
      label: "Scale",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 595, y: 1700 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "grids",
    data: {
      label: "Grids",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 905, y: 1600 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "skew",
    data: {
      label: "Skew",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 905, y: 1650 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "etc",
    data: {
      label: "..etc",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 905, y: 1700 },
    type: "custom",
    className: style.customNode__gray,
  },

  {
    id: "d3",
    data: {
      label: "D3",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "left", type: "target" }],
    },
    position: { x: 560, y: 1520 },
    type: "custom",
    className: style.customNode__gray,
  },

  {
    id: "design-patterns",
    data: {
      label: "Design Patterns",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      handles: [{ position: "left", type: "target" }],
    },
    position: { x: 560, y: 1770 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "regex",
    data: {
      label: "Regex",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 560, y: 1820 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "gof-design-patterns",
    data: {
      label: "GOF Design Patterns",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 560, y: 1870 },
    type: "custom",
    className: style.customNode__gray,
  },
  {
    id: "learn-diffrerent-testing-techniques",
    data: {
      label: "Learn different testing techniques",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    position: { x: 560, y: 1940 },
    type: "custom",
    className: style.customNode__gray,
  },
];
