import Rover from "../src/rover";

import * as chai from 'chai';

const assert = chai.assert;

let rover;

describe("Rover Test Scenario", function () {
  before("initialize rover", function () {
    
  });
  it("Test 1: Move Left", function () {
    rover = new Rover(0, 0, "N");
    const commands = ["l"];
    rover.move(commands);
    assert.equal(rover.facing, 'W');
  });
  it("Test 2: Move Left", function () {
    rover = new Rover(0, 0, "S");
    const commands = ["l"];
    rover.move(commands);
    assert.equal(rover.facing, 'E');
  });
  it("Test 3: Move Left", function () {
    rover = new Rover(0, 0, "E");
    const commands = ["l"];
    rover.move(commands);
    assert.equal(rover.facing, 'N');
  });
  it("Test 4: Move Left", function () {
    rover = new Rover(0, 0, "W");
    const commands = ["l"];
    rover.move(commands);
    assert.equal(rover.facing, 'S');
  });
  it("Test 4: Move Left", function () {
    rover = new Rover(0, 0, "W");
    const commands = ["l", "l"];
    rover.move(commands);
    assert.equal(rover.facing, 'E');
  });
  it("Test 1: Move Forward", function() {
    rover = new Rover(0,0, "N");
    const commands = ["f"];
    rover.move(commands);
    assert(rover.y, 1);
  })
});