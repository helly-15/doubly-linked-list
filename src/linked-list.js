const Node = require('./node');

class LinkedList {
    constructor() {
       this._head=null;
       this._tail=null;
       this.length = 0;
    }

    append(data) {
        let node = new Node (data)
        if (!this._head){
            
            this._head = node;
            this._tail = node;
        }
        else{
            node.prev = this._tail;
            this._tail.next = node;
            this._tail=node;
        } 
        this.length++;
    }

    head() {
        return this._head.data ; 
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let currentNode=this._head;
        for(let i=0; i<index;i++){
           currentNode = currentNode.next;
        }
        return currentNode.data;
            
    }

    insertAt(index, data) {
        let currentNode=this._head;
        for(let i=0; i<index;i++){
           currentNode = currentNode.next;
        }
        
        let node = new Node (data)
        node.prev=currentNode.prev;
        currentNode.prev.next=node;
        currentNode.prev=node;
        
        node.next=currentNode;
        this.length++;


    }

    isEmpty() {
        if(this.length==0){
            return true;
        }
        return false;
    }

    clear() {
        
        this._head.data=null;
        this._tail.data=null;
        this.length=0;

    }

    deleteAt(index) {
        let currentNode=this._head;
        for(let i=0; i<index+1;i++){
           currentNode = currentNode.next;
        }
        currentNode.prev.prev.next=currentNode;
        currentNode.prev=currentNode.prev.prev;
        
        
        this.length--;
    }

    reverse() {
        let transitionHead=this._head;
        let transitionTail=this._tail;
        this._head=transitionTail;
        this._tail=transitionHead;
        let currentNode=this._head;
        for(let i=0; i<this.length;i++){
            let prev = currentNode.prev;
            let next = currentNode.next;
            currentNode.prev=next;
            currentNode.next=prev;
            currentNode = currentNode.next;

        }
        
    }

    indexOf(data) {
        let currentNode=this._head;
        for(let i=0; i<this.length;i++){ 
            if(currentNode.data==data){return i}
            currentNode = currentNode.next;
        }
        return -1;

    }
}

module.exports = LinkedList;
