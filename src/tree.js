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

}