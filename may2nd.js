class Elevator{
  //constructor
  constructor(){
    this.speed = 1;
    this.currentFloor = 0;
    this.requestedFloor = [];
    this.direction = 'still';

  }

  //move method
  move(){
    // const nextFloor = this.requestedFloor[0]
    const nextFloor = this.nextFloor();
    console.log(nextFloor)
    //some conditional statement
    if(this.currentFloor === this.requestedFloor[0]) return;
    if(this.requestedFloor.length === 0) return;

    if(this.currentFloor<nextFloor){
      this.direction = 'up';
      console.log(`we are going ${this.direction} to the floor ${nextFloor}`)
      while(this.currentFloor<nextFloor){
        this.currentFloor++;
      }
    }else{
      this.direction = 'down';
      console.log(`we are going ${this.direction} to the floor ${nextFloor}`);
      while(this.currentFloor>nextFloor){
        this.currentFloor--;
      }
    }
    console.log(`arrived at floor ${nextFloor}`);
    this.requestedFloor = this.requestedFloor.filter(floor => floor !== nextFloor);
    if(this.requestedFloor.length === 0) this.direction = 'still'
    console.log(this.direction)
  }

  //request floor method
  floorRequest(floor){
    //conditional statement
    if(this.currentFloor === floor) return;
    if(this.requestedFloor.includes(floor)) return;

    else{
      this.requestedFloor.push(floor);
      this.requestedFloor.sort()
    }
  }

  //find next floor method
  nextFloor(){
    const aboveFloors = this.requestedFloor.filter(floor => floor>this.currentFloor);
    const belowFloors = this.requestedFloor.filter(floor => floor<this.currentFloor);

    //conditional statement
    if(aboveFloors.length===0 && belowFloors.length ===0){
      this.direction = 'still';
      return;
    };
    if(aboveFloors.length === 0){
      this.direction = 'down';
      return belowFloors[belowFloors.length -1]
    }
    if(belowFloors.length === 0){
      this.direction = 'up';
      return aboveFloors[0];
    }

    //logic of choosing the next floor
    if (this.direction = 'up'){
      return aboveFloors[0];
    }else{
      return belowFloors[belowFloors.length-1]
    }
  }

}

const elevator = new Elevator;

elevator.floorRequest(4)
elevator.floorRequest(5)
elevator.floorRequest(1)
elevator.move()
elevator.move()
elevator.floorRequest(2)
elevator.move()
elevator.move()
console.log(elevator)