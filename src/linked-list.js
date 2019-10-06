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
        return this;
    }

    head() {
        if (this._head == null) return null;
        return this._head.data ; 
    }

    tail() {
        if (this._tail == null) return null;
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
        if (this.length == 0) {
            return this.append(data);
        }

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
        return this;
    }

    isEmpty() {
        if(this.length==0){
            return true;
        }
        return false;
    }

    clear() {        
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (this.length == 1) {
            this._head = null;
            this._tail = null;
            return this;
        }

        let currentNode=this._head;
        for(let i=0; i<index+1;i++){
           currentNode = currentNode.next;
        }
        currentNode.prev.prev.next=currentNode;
        currentNode.prev=currentNode.prev.prev;
        
        this.length--;
        return this;
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
        return this;
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
