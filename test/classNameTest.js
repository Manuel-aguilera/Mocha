// Uncomment if using Node
var chai = require("chai");
var assert = chai.assert;

var className = require("../js/className");
var addClass = className.addClass;

describe("addClass", function () {
	it("should add class into element", function () {
		let element = { className: "" };

		addClass(element, "test-class");

		assert.equal(element.className, "test-class");
	});
	it("should not add a class which already exists", function () {
		let element = { className: "exists" };

		addClass(element, "exists");

		let numClasses = element.className.split(" ").length;
		assert.equal(numClasses, 1);
	});
	it("should append new class after existing one", function () {
		let element = { className: "exists" };

		addClass(element, "new-class");

		const classes = element.className.split(" ");
		assert.equal(classes[1], "new-class");
	});
});
