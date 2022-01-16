Package.describe({
  name: "react",
  version: "0.0.1",
  summary: "The react display components for OGLify Meteor",
  git: "https://github.com/oglify/oglify-react",
  documentation: "README.md",
});

Package.onUse(function (api) {
  api.versionsFrom("2.5.3");
  api.use(["ecmascript", "oglify-react-theme"]);
  api.mainModule("oglify-react.js");
});

Package.onTest(function (api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("oglify-react");
  api.mainModule("oglify-react-tests.js");
});
