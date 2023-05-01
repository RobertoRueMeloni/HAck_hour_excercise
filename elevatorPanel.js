class ElevatorPanel {
  constructor(elevator) {
    this.elevator = elevator;
    this.direction = 'none';
    this.selectedFloors = [];
    this.elevatorDirectionListener = this.elevatorDirectionListener.bind(this);
    this.elevator.onDirectionChange(this.elevatorDirectionListener);
  }

  pressFloorButton(floor) {
    if (this.selectedFloors.includes(floor)) {
      console.log("Floor", floor, "has already been selected.");
      return;
    }

    if (this.direction === 'none') {
      // elevator is not moving, so add the floor to the destination list
      this.selectedFloors.push(floor);
      this.elevator.goToFloor(floor);
      return;
    }

    if ((this.direction === 'up' && floor > this.elevator.currentFloor) ||
        (this.direction === 'down' && floor < this.elevator.currentFloor)) {
      // add the floor to the destination list in the correct order
      const index = this.selectedFloors.findIndex(f => {
        return (this.direction === 'up' && floor < f) || (this.direction === 'down' && floor > f);
      });
      if (index === -1) {
        this.selectedFloors.push(floor);
      } else {
        this.selectedFloors.splice(index, 0, floor);
      }
    } else {
      // add the floor to the end of the destination list
      this.selectedFloors.push(floor);
    }
  }

  elevatorDirectionListener(direction) {
    this.direction = direction;
    this.sortSelectedFloors();
    if (this.selectedFloors.length > 0) {
      this.elevator.goToFloor(this.selectedFloors[0]);
    }
  }

  sortSelectedFloors() {
    if (this.direction === 'up') {
      this.selectedFloors.sort((a, b) => a - b);
    } else if (this.direction === 'down') {
      this.selectedFloors.sort((a, b) => b - a);
    }
  }
}
