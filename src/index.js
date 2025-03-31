import {Tree} from './tree'
import { prettyPrint } from './prettyPrint';

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

console.log(prettyPrint(tree.root));