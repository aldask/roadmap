interface Node {
  id: string;
  data: {
    label: string;
    className: string;
  };
  position: {
    x: number;
    y: number;
  };
}

export const nodes: Node[] = [
  {
    id: "front-end-title",
    data: { label: "Front-end roadmap", className: "h1-title" },
    position: { x: 100, y: 100 },
  },
  {
    id: "learn-the-basics-title",
    data: { label: "Learn the Basics", className: "h2-title" },
    position: { x: 150, y: 250 },
  },
  {
    id: "main-artery0",
    data: { label: "point1", className: "blank" },
    position: { x: 160, y: 450 },
  },
  {
    id: "getting-deeper-title",
    data: { label: "Getting deeper", className: "h2-title" },
    position: { x: 170, y: 600 },
  },
  {
    id: "main-artery1",
    data: { label: "point1", className: "blank" },
    position: { x: 140, y: 780 },
  },
  {
    id: "main-artery2",
    data: { label: "point2", className: "blank" },
    position: { x: 110, y: 1400 },
  },
  {
    id: "main-artery3",
    data: { label: "finish", className: "blank" },
    position: { x: 70, y: 2100 },
  },

  {
    id: "html",
    data: { label: "HTML", className: "yellow" },
    position: { x: -70, y: 400 },
  },
  {
    id: "css",
    data: { label: "CSS", className: "yellow" },
    position: { x: -70, y: 450 },
  },
  {
    id: "js",
    data: { label: "JavaScript", className: "yellow" },
    position: { x: -70, y: 500 },
  },

  {
    id: "css0",
    data: { label: "CSS", className: "yellow" },
    position: { x: 350, y: 820 },
  },
  {
    id: "responsive",
    data: { label: "Responsive Web", className: "yellow" },
    position: { x: 420, y: 720 },
  },

  {
    id: "preprocessors-title",
    data: { label: "Preprocessors", className: "h2-title" },
    position: { x: 580, y: 880 },
  },
  {
    id: "sass",
    data: { label: "Sass", className: "yellow" },
    position: { x: 560, y: 980 },
  },
  {
    id: "less",
    data: { label: "Less", className: "gray" },
    position: { x: 560, y: 1020 },
  },
  {
    id: "stylus",
    data: { label: "Stylus", className: "gray" },
    position: { x: 560, y: 1060 },
  },
  {
    id: "postcss",
    data: { label: "PostCSS", className: "gray" },
    position: { x: 560, y: 1100 },
  },

  {
    id: "choose-framework0-title",
    data: { label: "Choose Framework", className: "h2-title" },
    position: { x: 320, y: 920 },
  },
  {
    id: "foundation",
    data: { label: "Foundation", className: "gray" },
    position: { x: 310, y: 1030 },
  },
  {
    id: "bootstrap",
    data: { label: "Bootstrap", className: "yellow" },
    position: { x: 310, y: 1070 },
  },
  {
    id: "materialize-css",
    data: { label: "Materialize CSS", className: "orange" },
    position: { x: 310, y: 1110 },
  },
  {
    id: "semantic-ui",
    data: { label: "Semantic UI", className: "orange" },
    position: { x: 310, y: 1150 },
  },

  {
    id: "js2",
    data: { label: "JavaScript", className: "yellow" },
    position: { x: -100, y: 840 },
  },
  {
    id: "es6",
    data: { label: "ES6", className: "yellow" },
    position: { x: -200, y: 740 },
  },
  {
    id: "ts",
    data: { label: "TypeScript", className: "yellow" },
    position: { x: -10, y: 940 },
  },
  {
    id: "flow",
    data: { label: "Flow", className: "gray" },
    position: { x: -10, y: 980 },
  },

  {
    id: "task-runners-title",
    data: { label: "Task Runners", className: "h2-title" },
    position: { x: -350, y: 820 },
  },
  {
    id: "npm-scripts",
    data: { label: "npm scripts", className: "yellow" },
    position: { x: -450, y: 890 },
  },
  {
    id: "gulp",
    data: { label: "gulp", className: "yellow" },
    position: { x: -450, y: 930 },
  },
  {
    id: "grunt",
    data: { label: "Grunt", className: "gray" },
    position: { x: -450, y: 970 },
  },

  {
    id: "package-manager-title",
    data: { label: "Package Manager", className: "h2-title" },
    position: { x: -410, y: 1080 },
  },
  {
    id: "yarn",
    data: { label: "Yarn", className: "yellow" },
    position: { x: -450, y: 1160 },
  },
  {
    id: "npm",
    data: { label: "npm", className: "yellow" },
    position: { x: -450, y: 1200 },
  },

  {
    id: "testing-title",
    data: { label: "Testing", className: "h2-title" },
    position: { x: -210, y: 1020 },
  },
  {
    id: "jest",
    data: { label: "Jest", className: "orange" },
    position: { x: -230, y: 1100 },
  },
  {
    id: "mocha",
    data: { label: "Mocha", className: "orange" },
    position: { x: -230, y: 1140 },
  },
  {
    id: "jasmine",
    data: { label: "Jasmine", className: "orange" },
    position: { x: -230, y: 1180 },
  },
  {
    id: "enzyme",
    data: { label: "Enzyme", className: "orange" },
    position: { x: -230, y: 1220 },
  },

  {
    id: "module-title",
    data: { label: "Module Loader/Bundler", className: "h2-title" },
    position: { x: -30, y: 1200 },
  },
  {
    id: "webpack",
    data: { label: "webpack", className: "yellow" },
    position: { x: -50, y: 1300 },
  },
  {
    id: "rollup",
    data: { label: "rollup", className: "orange" },
    position: { x: -50, y: 1340 },
  },
  {
    id: "parcel",
    data: { label: "Parcel", className: "gray" },
    position: { x: -50, y: 1380 },
  },
  {
    id: "requirejs",
    data: { label: "RequireJS / AMD", className: "gray" },
    position: { x: -50, y: 1420 },
  },
  {
    id: "browserify",
    data: { label: "Browserify", className: "gray" },
    position: { x: -50, y: 1460 },
  },

  {
    id: "choose-framework1-title",
    data: { label: "Choose a Framework", className: "h2-title" },
    position: { x: -400, y: 1350 },
  },
  {
    id: "angular",
    data: { label: "Angular", className: "yellow" },
    position: { x: -420, y: 1450 },
  },
  {
    id: "react",
    data: { label: "React", className: "yellow" },
    position: { x: -420, y: 1490 },
  },
  {
    id: "vue",
    data: { label: "Vue.js", className: "orange" },
    position: { x: -420, y: 1530 },
  },
  {
    id: "preact",
    data: { label: "Preact", className: "gray" },
    position: { x: -420, y: 1570 },
  },
  {
    id: "ember",
    data: { label: "Ember JS", className: "gray" },
    position: { x: -420, y: 1610 },
  },

  {
    id: "rxjs",
    data: { label: "RxJS", className: "yellow" },
    position: { x: -290, y: 1710 },
  },
  {
    id: "ts1",
    data: { label: "TypeScript", className: "yellow" },
    position: { x: -290, y: 1750 },
  },

  {
    id: "flux",
    data: { label: "Flux", className: "gray" },
    position: { x: -540, y: 1680 },
  },
  {
    id: "redux",
    data: { label: "Redux", className: "yellow" },
    position: { x: -540, y: 1720 },
  },
  {
    id: "mobx",
    data: { label: "Mobx", className: "orange" },
    position: { x: -540, y: 1760 },
  },

  {
    id: "css1",
    data: { label: "CSS", className: "yellow" },
    position: { x: 380, y: 1500 },
  },
  {
    id: "svg",
    data: { label: "SVG", className: "gray" },
    position: { x: 380, y: 1540 },
  },
  {
    id: "js1",
    data: { label: "JavaScript", className: "yellow" },
    position: { x: 380, y: 1580 },
  },

  {
    id: "methodologies",
    data: { label: "Methodologies", className: "h2-title" },
    position: { x: 450, y: 1380 },
  },
  {
    id: "oocss",
    data: { label: "OOCSS", className: "gray" },
    position: { x: 680, y: 1340 },
  },
  {
    id: "bem",
    data: { label: "BEM", className: "yellow" },
    position: { x: 680, y: 1300 },
  },
  {
    id: "suitcss",
    data: { label: "SUITCSS", className: "gray" },
    position: { x: 680, y: 1260 },
  },
  {
    id: "smacss",
    data: { label: "SMACSS", className: "gray" },
    position: { x: 680, y: 1380 },
  },
  {
    id: "systematic-css",
    data: { label: "Systematic CSS", className: "gray" },
    position: { x: 680, y: 1420 },
  },

  {
    id: "dive-deep-css3",
    data: { label: "Dive Deep CSS3", className: "yellow" },
    position: { x: 750, y: 1550 },
  },
  {
    id: "gradients",
    data: { label: "Gradients", className: "gray" },
    position: { x: 750, y: 1590 },
  },
  {
    id: "transform",
    data: { label: "Transform", className: "gray" },
    position: { x: 750, y: 1630 },
  },
  {
    id: "transitions",
    data: { label: "Transitions", className: "gray" },
    position: { x: 750, y: 1670 },
  },
  {
    id: "flexbox",
    data: { label: "Flexbox", className: "gray" },
    position: { x: 595, y: 1590 },
  },
  {
    id: "rotate",
    data: { label: "Rotate", className: "gray" },
    position: { x: 595, y: 1630 },
  },
  {
    id: "scale",
    data: { label: "Scale", className: "gray" },
    position: { x: 595, y: 1670 },
  },
  {
    id: "grids",
    data: { label: "Grids", className: "gray" },
    position: { x: 905, y: 1590 },
  },
  {
    id: "skew",
    data: { label: "Skew", className: "gray" },
    position: { x: 905, y: 1630 },
  },
  {
    id: "etc",
    data: { label: "..etc", className: "gray" },
    position: { x: 905, y: 1670 },
  },

  {
    id: "d3",
    data: { label: "D3", className: "gray" },
    position: { x: 560, y: 1520 },
  },

  {
    id: "design-patterns",
    data: { label: "Design Patterns", className: "gray" },
    position: { x: 560, y: 1770 },
  },
  {
    id: "regex",
    data: { label: "Regex", className: "gray" },
    position: { x: 560, y: 1810 },
  },
  {
    id: "gof-design-patterns",
    data: { label: "GOF Design Patterns", className: "gray" },
    position: { x: 560, y: 1850 },
  },
  {
    id: "learn-diffrerent-testing-techniques",
    data: { label: "Learn different testing techniques", className: "gray" },
    position: { x: 560, y: 1890 },
  },
];
