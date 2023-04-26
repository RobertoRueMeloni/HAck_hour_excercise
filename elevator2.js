class Elevator {
  constructor() {
    this.currentFloor = 1;
    this.destinationFloors = [];
  }

  requestFloor(floor) {
    if (floor === this.currentFloor) {
      console.log("You are already on floor", floor);
      return;
    }
    if (this.destinationFloors.includes(floor)) {
      console.log("Floor", floor, "has already been requested.");
      return;
    }
    this.destinationFloors.push(floor);
  }

  move() {
    if (this.destinationFloors.length === 0) {
      console.log("No destination floors requested.");
      return;
    }
    const nextFloor = this.destinationFloors.shift();
    if (this.currentFloor < nextFloor) {
      console.log("Going up...");
      while (this.currentFloor < nextFloor) {
        this.currentFloor++;
        console.log("Floor", this.currentFloor);
      }
    } else if (this.currentFloor > nextFloor) {
      console.log("Going down...");
      while (this.currentFloor > nextFloor) {
        this.currentFloor--;
        console.log("Floor", this.currentFloor);
      }
    }
    console.log("Arrived at floor", this.currentFloor);
  }
}
const test = new Elevator();

test.requestFloor(4);
test.move();
test.requestFloor(8);
test.requestFloor(4)
test.requestFloor(3);
test.move();
console.log(test)
test.move()
test.move()