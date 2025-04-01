import { buildTree } from "./buildTree";
import { sortAndDeleteDuplicatesOf } from "./mergeSort";
import { Node } from "./node";

export class Tree{
    constructor(array){
        this.root = buildTree(sortAndDeleteDuplicatesOf(array));
    }

    insert(value , object = this.root){
        if(object.data === value) return;
        if(value > object.data){
            if(object.right === null){
                object.right = new Node(value);
                return;
            }
            this.insert(value, object.right);
        }else if(value < object.data){
            if(object.left === null){
                object.left = new Node(value);
                return;
            }
            this.insert(value, object.left);
        }
        return;
    }

    delete(value){

        let deleteObject = this.find(value);

        if(deleteObject === null) return;
        if(deleteObject !== null){

            if(deleteObject.left === null && deleteObject.right === null){
                this.setRootToNull(value);
                this.deleteNodeWithNoChildren(value);

            }else if(deleteObject.left === null || deleteObject.right === null){
                this.setRootToNull(value);
                this.deleteNodeWithOnlyOneChild(value);

            }else if(deleteObject.left !== null && deleteObject.right !== null){

                this.deleteNodeWithTwoChildren(value);
            }

        }

    }

    deleteNodeWithNoChildren(value , object = this.root ){
        if(object.right.data === value){
            object.right = null;
            return;
        }else if(object.left.data === value){
            object.left = null;
            return;
        }
    
        if(value > object.data){
            return this.deleteNodeWithNoChildren(value, object.right);
        }else if(value < object.data){
            return this.deleteNodeWithNoChildren(value, object.left);
        }
    }

    deleteNodeWithOnlyOneChild(value, object = this.root){
        if(object.right.data === value){
            if(object.right.right === null){
                object.right = object.right.left;
                return;
            }else if(object.right.left === null){
                object.right = object.right.right;
                return;
            }
        }
    
        if(object.left.data === value){
            if(object.left.right === null){
                object.left = object.left.left;
                return;
            }else if(object.left.left === null){
                object.left = object.left.right;
                return;
            }
        }
    
        if(value > object.data){
            return this.deleteNodeWithOnlyOneChild(value , object.right);
        }else if(value < object.data){
            return this.deleteNodeWithOnlyOneChild(value, object.left);
        }
    }

    deleteNodeWithTwoChildren(value, parentObject = this.root){
        // base consition
        if(parentObject.data === value){
            if(parentObject.right.left === null){
                let replaceData = parentObject.right.data;
                parentObject.data = replaceData;
                parentObject.right.data = value;
    
                if(parentObject.right.right === null){
                    this.setRootToNull(value);;
                    parentObject.right = null;
                }else if(parentObject.right.right !== null){
                    this.setRootToNull(value);
                    parentObject.right = parentObject.right.right;
                }
                return;
    
            }
            
            // instead of writing this function directly where we cant use this. properly
            // we can use either an arrow function or bind the function to this
            // arrow beacause it can inherit the this. from the parent method
            const step4 = (object) => {
                if(object.left.left === null){
                    let replaceData = object.left.data;
                    parentObject.data = replaceData;
                    object.left.data = value;
                    if(object.left.right === null){
                        this.setRootToNull(value);
                        object.left = null;
                    }else if(object.left.right !== null){
                        this.setRootToNull(value);
                        object.left = object.left.right;
                    }
                    
                    return;
                }
                return step4(object.left);
            }
            step4(parentObject.right);

            return;
        }
    
        // recursive condition
        if(value > parentObject.data){
            return this.deleteNodeWithTwoChildren(value, parentObject.right);
        }else if(value < parentObject.data){
            return this.deleteNodeWithTwoChildren(value, parentObject.left);
        }
    
    }

    setRootToNull(value){
        if(this.root.data === value){
            this.root = null;
            return;
        }
        return;
    }

    // returns null if not found
    find(value, object = this.root){
        if(value === object.data) return object;
        if(value > object.data){
            if(object.right === null) return null;
            return this.find(value, object.right);
        }else if(value < object.data){
            if(object.left === null) return null;
            return this.find(value, object.left);
        }
        return null;
    }

    levelOrder(callback){
        if(callback === null || callback === undefined || typeof(callback) !== "function"){
            throw new Error("Enter a Valid callback");
        }

        let q = [];

        q.push(this.root);
        // method 1 - recursive approach
        // levelOrderQue();

        // function levelOrderQue(){
        //     callback(q[0].data);
        //     if(q[0].left !== null){
        //         q.push(q[0].left);
        //     }
        //     if(q[0].right !== null){
        //         q.push(q[0].right);
        //     }
        //     q.shift();

        //     if(q.length === 0) return;
        //     if(q.length !== 0){
        //         return levelOrderQue();
        //     }

        // }

        // method 2 - iterative approach
        while(q.length !== 0){
            callback(q[0].data);
            if(q[0].left !== null){
                q.push(q[0].left);
            }
            if(q[0].right !== null){
                q.push(q[0].right);
            }

            q.shift();
        }
    }

    // A good way to clear the cofusion regarding depth first traversals is
    // whenever you want to enter a node, there is a pre-established pattern
    // for each of the three patterns.

    // if the first node is root in the pattern, then we visit the root and 
    // call the callback on the value of the root, then we visit the left node
    // once we visit the new node, we again refer to the pattern in reference to
    // the node we are in, i.e root, we call the callback on the root and then call left
    // we go untill we hit null on the left and then start calling the callback on the right, we go back
    // to the OG root where the left is done and we call the right, again we refer to the
    // pattern where root is first and left is second, so we go the left , again we
    // call on the root and go left untill we hit null and then go to right and go back up
    // untill we finish the tree.

    // if root is not first

    // for example if the first in the pattern is left, then we go the left
    // node and then refer to the pattern, since the first in the pattern is
    // left, we go left, notice we are not doing anything here with the data,
    // thats because we haven't hit the root in the pattern here. we go on 
    // untill the left hits a null and then we go to the root and call the
    // callback on the root and then go right and check whether the left is 
    // null or not and then go to root and then right. Notice how we are 
    // travelling to the left most of the subtree whenever we go to a node
    // and then go to the root and then right.

    // going into the deepest level when root is not the first in pattern 
    // is going to take time to adjust, when root is first we go to the 
    // deepest level but only after processing the current root.
    
    // fun fact
    // inorder traversal produces sorted array for numbers in ascending order

    // preorder pattern root-left-right
    preorder(callback){
      
        // the error thrown in the callbackError stops preorder 
        // as well because error propagartes up the callstack and
        // crashes the script since we are not catching it
        // idk i might be wrong
        if(callback === null || callback === undefined || typeof(callback) !== "function"){
            throw new Error("Enter a Valid callback");
        }

        const step = (object = this.root) => {
            if(object === null) return;
            
            callback(object.data);
            step(object.left);
            step(object.right);
        }
    
        step();

    }

    callbackError(callback){
        if(callback === null || callback === undefined || typeof(callback) !== "function"){
            throw new Error("Enter a Valid callback");
        }
    }

    // preorder pattern left-root-right
    inOrder(callback){
        if(callback === null || callback === undefined || typeof(callback) !== "function"){
            throw new Error("Enter a Valid callback");
        }

        const step = (object = this.root) => {
            if(object === null) return;

            step(object.left);
            callback(object.data);
            step(object.right);
        }

        step();
    }

    // preorder pattern left-right-root
    postOrder(callback){
        if(callback === null || callback === undefined || typeof(callback) !== "function"){
            throw new Error("Enter a Valid callback");
        }
        
        const step =(object = this.root) => {
            if(object === null) return;

            step(object.left);
            step(object.right);
            callback(object.data);
        }

        step();
    }

    height(value){
        const nodeObject = this.find(value);
        if(nodeObject === null) return 0;

        const step = (object = nodeObject) => {
            if(object === null) return -1;

            const heightOfLeft = step(object.left);
            const heightOfRight = step(object.right);

            return 1 + Math.max(heightOfLeft , heightOfRight);
        }

        return step();
    }

    depth(value){
        const nodeObject = this.find(value);
        if(nodeObject === null) return;

        const step = (object = this.root) => {
            if(object.data === value) return 0;

            if(value > object.data){
                return 1 + step(object.right);
            }else if(value < object.data){
                return 1 + step(object.left);
            }
        }

        return step();
    }

    isbalanced(){
        if(this.root === null) return false;

        const step = (object = this.root) => {
            if(object === null) return true;

            let heightOfObjectLeft;
            let heightOfObjectRight;

            if(object.left !== null){
                heightOfObjectLeft = this.height(object.left.data);
            }else {heightOfObjectLeft = 0}

            if(object.right !== null){
                heightOfObjectRight = this.height(object.right.data);
            }else {heightOfObjectRight = 0}

            const difference =  heightOfObjectLeft - heightOfObjectRight;
            
            if(Math.abs(difference) > 1) return false;

            const isbalanceLeft = step(object.left);
            const isbalanceRight = step(object.right);
            
            return (isbalanceLeft && isbalanceRight);
        }

        return step();
    }

    reBalance(){
        
        let unBalancedArray = [];

        const step = (object = this.root) => {
            if(object === null) return;

            unBalancedArray.push(object.data);
            step(object.left);
            step(object.right);
        }

        step();

        this.root = buildTree(sortAndDeleteDuplicatesOf(unBalancedArray));
    }
}