Package.describe({
  name: "oglify:react",
  version: "0.0.2",
  summary: "The react display components for OGLify Meteor",
  git: "https://github.com/oglify/oglify-react",
  documentation: "README.md",
});

Npm.depends({
  "@babel/runtime": "7.16.7",
  react: "17.0.2",
  "react-dom": "17.0.2",
});

Package.onUse(function (api) {
  api.versionsFrom("2.5.3");
  api.use(["ecmascript", "oglify:react-theme@0.0.2"]);
  api.mainModule("oglify-react.js");
});

Package.onTest(function (api) {
  api.use(["ecmascript", "oglify:react-theme@0.0.2"]);
  api.use("tinytest");
  api.use("oglify:react");
  api.mainModule("oglify-react-tests.js");
});
