import {Tree} from './tree'
import { prettyPrint } from './prettyPrint';

// const array = [20, 30, 32, 34, 36, 40, 60, 65, 70, 75, 80, 85];
// const tree = new Tree(array);

// console.log(prettyPrint(tree.root));

// // testing insert and delete
// tree.insert(90);
// tree.insert(10);
// tree.insert(35);
// tree.insert(38);
// tree.insert(33);
// tree.delete(60);
// tree.delete(85);
// tree.delete(32);

// console.log(prettyPrint(tree.root));

function consoleLog(value){
    console.log(value);
    return;
}

// // testing levelorder(callback)
// tree.levelOrder(consoleLog);

// // test the throw error in levelOrder function
// tree.levelOrder();

// // test the inorder
// tree.preorder(consoleLog);

// // test the throw error in preorder function
// tree.preorder();

// // test the inorder
// tree.inOrder(consoleLog);

// // test the throw error in preorder function
// tree.inOrder();

// // test the inorder
// tree.postOrder(consoleLog);

// // test the throw error in preorder function
// tree.postOrder();


// // Height of a node
// console.log(tree.height(38));

// // depth of a node
// console.log(tree.depth(40));

// // isBalance test
// console.log(tree.isbalance());



// driver script

function randomNumbersLessThan100(){
    let randomNumbersArray = []
    for(let i = 1 ; i < 100 ; i++){
        const randomNumber = parseInt(Math.random()*100);
        if(randomNumber > 0){
            randomNumbersArray.push(randomNumber);
        }
    }
    return randomNumbersArray;
}
const array1 = randomNumbersLessThan100();
console.log(array1);

const tree1 = new Tree(array1);

console.log(tree1.isbalanced());

console.log(prettyPrint(tree1.root));

// tree1.levelOrder(consoleLog);
// tree1.preorder(consoleLog);
// tree1.inOrder(consoleLog);
// tree1.postOrder(consoleLog);

tree1.insert(101);
tree1.insert(102);
tree1.insert(103);
tree1.insert(104);
tree1.insert(105);
tree1.insert(106);
tree1.insert(107);
tree1.insert(108);
tree1.insert(109);
tree1.insert(110);
tree1.insert(111);

console.log(prettyPrint(tree1.root));
console.log(tree1.isbalanced());
tree1.reBalance();
console.log(prettyPrint(tree1.root));
console.log(tree1.isbalanced());

// tree1.levelOrder(consoleLog);
// tree1.preorder(consoleLog);
// tree1.inOrder(consoleLog);
// tree1.postOrder(consoleLog);


// testing the error from random numbers
// const array2 = [20, 42, 17, 92, 9, 92, 79, 37, 28];

// const tree2 = new Tree(array2);

// console.log(prettyPrint(tree2.root));