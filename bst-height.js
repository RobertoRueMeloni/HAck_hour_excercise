function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
//comment
/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/

const bstHeight = tree => {
 let maxHeight = 0;
 
  function inner(node,depth){
   if(!node){
    maxHeight = Math.max(maxHeight, depth);
    return;
   }
   inner(node.right, depth +1);
   inner(node.left, depth+1);
  }
  inner(tree,0)
  return maxHeight-1
};

// // create a new binary search tree
// const root = new BinarySearchTree(4);
// root.left = new BinarySearchTree(2);
// root.left.left = new BinarySearchTree(1);
// // root.left.right = new BinarySearchTree(3);
// root.right = new BinarySearchTree(7);
// root.right.right = new BinarySearchTree(9);
// root.right.right.left = new BinarySearchTree(8);

// // calculate the height of the tree
// const height = bstHeight(root);

// console.log(height); // should output 3


/*
  Extension:

  Write a function to see if a binary tree is "superbalanced".
  An empty tree is balanced. A non-empty binary tree T is balanced if:
    1) Left subtree of T is balanced
    2) Right subtree of T is balanced
    3) The difference between heights of left subtree and right subtree is not more than 1.
  example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF

  A superbalanced tree is a tree that is balanced at every subtree level as well.

  Ex. 
        4                       4
      /   \                   /   \
     2     7                2       7
    / \     \             /  \     /  \
   1   3     9           1    3   5    9
            /                         /
           8                         8

  The tree on the left is balanced - height of left side is 2, height of right side is 3.
  But, it is not superbalanced since for the 7 subtree, height of left is 0, height of right is 2.
  
  The tree on the right is superbalanced since the difference in height is not more than 1 at any given subtree.
 */

const superbalanced = tree => {
  let isBalanced = true;
  function inner(node){
    if(!node){
      return 0;
    }
   
    let leftHeight = inner(node.left);
    let rightHeight = inner(node.right);

    if(Math.abs(leftHeight-rightHeight)>1) isBalanced = false;

    return Math.max(leftHeight,rightHeight)+1
  }
  inner(tree)
  return isBalanced;
};
// create a new binary search tree
const root = new BinarySearchTree(4);
root.left = new BinarySearchTree(2);
root.left.left = new BinarySearchTree(1);
root.left.right = new BinarySearchTree(3);
root.right = new BinarySearchTree(7);
root.right.right = new BinarySearchTree(9);
root.right.right.left = new BinarySearchTree(8);

// calculate the height of the tree
const fals = superbalanced(root);

console.log(fals); // should output 3


module.exports = {BinarySearchTree, bstHeight, superbalanced};
