import {Tree} from './tree'
import { prettyPrint } from './prettyPrint';

const array = [20, 30, 32, 34, 36, 40, 60, 65, 70, 75, 80, 85];
const tree = new Tree(array);

console.log(prettyPrint(tree.root));

tree.insert(90);
tree.insert(10);
tree.insert(35);
tree.insert(38);
tree.insert(33);
tree.delete(60);
console.log(prettyPrint(tree.root));
tree.delete(85);
tree.delete(32);

console.log(prettyPrint(tree.root));