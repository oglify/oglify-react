// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by oglify-react.js.
import { name as packageName } from "meteor/oglify-react";

// Write your tests here!
// Here is an example.
Tinytest.add('oglify-react - example', function (test) {
  test.equal(packageName, "oglify-react");
});
