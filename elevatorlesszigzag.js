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
    this.destinationFloors.sort();
  }

  move() {
    if (this.destinationFloors.length === 0) {
      console.log("No destination floors requested.");
      return;
    }
    const nextFloor = this.findNextFloor();
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
    this.destinationFloors = this.destinationFloors.filter(floor => floor !== nextFloor);
  }

  findNextFloor() {
    const aboveFloors = this.destinationFloors.filter(floor => floor > this.currentFloor);
    const belowFloors = this.destinationFloors.filter(floor => floor < this.currentFloor);
    if (aboveFloors.length === 0 && belowFloors.length === 0) {
      return this.currentFloor;
    }
    if (aboveFloors.length === 0) {
      return belowFloors[0];
    }
    if (belowFloors.length === 0) {
      return aboveFloors[0];
    }
    if (this.currentFloor - belowFloors[belowFloors.length - 1] <= aboveFloors[0] - this.currentFloor) {
      return belowFloors[belowFloors.length - 1];
    } else {
      return aboveFloors[0];
    }
  }
}
const test = new Elevator();

test.requestFloor(4);
// test.move();
test.requestFloor(8);
test.requestFloor(4)
test.requestFloor(3);
test.move();
test.move()
console.log(test.findNextFloor())
console.log(test)
// test.move()
// test.move()