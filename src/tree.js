import { buildTree } from "./buildTree";
import { sortAndDeleteDuplicatesOf } from "./mergeSort";

export class Tree{
    constructor(array){
        this.root = buildTree(sortAndDeleteDuplicatesOf(array));
    }
}