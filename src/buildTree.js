import { Node } from "./node.js";

export function buildTree(array, start = 0, end = array.length - 1 ){
    if(start > end) return null;
    let midPoint = start + Math.floor((end - start)/2);
    console.log(array[midPoint]);
    
    let root = new Node(array[midPoint]);

    root.left = buildTree(array , start , midPoint - 1);
    root.right = buildTree(array, midPoint + 1 , end);

    return root;

}