function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

const reverse = list =>{
  const result = new LinkedList;
  const inner = node =>{
    if(node.next === null){
      result.head = node.value
    }
    result
  }
}