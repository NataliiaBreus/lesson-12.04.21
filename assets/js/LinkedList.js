class LinkedListIterator {
    constructor (list){
        this.list = list;
        this.currentNode = null;
    }
    next(){
        this.currentNode = this.currentNode ? this.currentNode.next : this.lost.head;
        return {
            value: this.currentNode ? this.currentNode.value : undefined,
            done: !this.currentNode,
        }
    } 
}

class LinkedList {
    constructor (...args) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.push(...args)
    }
    push(...args) {
        for(const item of args) {
            const newNode = new LinkedListNode(item);
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            this.length++;
        }

    }
    [Symbol.iterator](){
        return new LinkedListIterator(this);
    }
}
class LinkedListNode {
    constructor(v){
        this.value = v;
        this.next = null;
        this.prev = null;
    }
    set value (newValue){
        this._value = newValue;
    }
    get value(){
        return this._value;
    }

    set next (newNext){
        if(!newNext instanceof LinkedListNode){
            throw new TypeError('Wrong value')
        }
        this._next = newNext;
    }
    get next(){
        return this._next
    }

     set prev (newPrev){
        if(!newPrev instanceof LinkedListNode){
            throw new TypeError('Wrong value')
        }
         this._prev = newPrev;
     }
     get prev(){
         return this._prev
     }
}