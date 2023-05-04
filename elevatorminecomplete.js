class Elevator {
  constructor(){
    this.speed = 1;
    this.currentFloor = 0;
    this.floorRequested = [];
  }

  move(){
    // const nextFloor = this.assignFloor()
    // console.log(nextFloor)
    // if (this.currentFloor === this.floorRequested[0]) return `${this.currentFloor} is the floor you are in`;
    // if (this.floorRequested.length === 0) return 'nowhere to go!';

    // if (this.floorRequested[0]>this.currentFloor){
    //   console.log('going up');
    //   while(this.currentFloor !== this.floorRequested[0]){
    //     console.log('here');
    //     this.currentFloor++;
    //   }
    //   this.floorRequested.shift();
    //   console.log(`arrived at floor ${this.currentFloor}`);
    // }else{
    //   console.log('going down');
    //   while(this.currentFloor!==this.floorRequested[0]){
    //     console.log('here')
    //     this.currentFloor--;
    //   }
    //   this.floorRequested.shift();
    //   console.log(`arrived at floor ${this.currentFloor}`);
    // }

    if(this.floorRequested.length === 0) return ' no where to go';
    const nextFloor = this.assignFloor();
    if(nextFloor > this.currentFloor){
      console.log(' going up');
      while(this.currentFloor !== nextFloor){
        this.currentFloor++;
      }
    }else{
      console.log('going down');
      while(this.currentFloor !== nextFloor){
        this.currentFloor--;
      }
    }
    console.log(`arrived at floor ${nextFloor}`);
    this.floorRequested = this.floorRequested.filter(floor => floor !== nextFloor);
  }
  requestFloor(floor){
    // if(this.currentFloor === floor) return `you are currently on floor ${floor}`;
    if(this.currentFloor === floor) return `you are currently on floor ${floor}`;
    if(this.floorRequested.includes(floor)) return ` we are already going to floor ${floor}`;
    else{
      this.floorRequested.push(floor);
      this.floorRequested.sort();
    }
    return this.floorRequested;
  }
  assignFloor(){
    const aboveFloors = this.floorRequested.filter(floor => floor>this.currentFloor);
    const belowFloors = this.floorRequested.filter(floor => floor<this.currentFloor);
    if (aboveFloors.length === 0 && belowFloors.length === 0) return this.currentFloor;
    if(aboveFloors.length===0) return belowFloors[belowFloors.length -1];
    if(belowFloors.length===0) return aboveFloors[0];
    if(this.currentFloor - belowFloors[belowFloors.length -1] > aboveFloors[0] - this.currentFloor) return aboveFloors[0];
    else return belowFloors[ belowFloors.length -1];
  }
}

// const elevator = new Elevator;
// elevator.requestFloor(3);
// elevator.requestFloor(1);
// console.log(elevator.requestFloor(1));
// console.log(elevator.requestFloor(5));
// // console.log(elevator.move())
// // console.log(assignFloor())
// elevator.move()
// elevator.move()
// // elevator.requestFloor(1)
// elevator.move()
// console.log(elevator)