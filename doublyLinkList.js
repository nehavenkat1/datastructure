function DoublyLinkListNode(data) {
    this.data = data
    this.next = null
    this.prev = null
}

function DoublyLinkList() {
    this.head = null
    this.tail = null
    this.size = 0

    this.isEmpty = function() {
        return this.size === 0
    }

    this.addAtFront = function(value) {
        if(this.head === null) {
            this.head = new DoublyLinkListNode(value)
            this.tail = this.head
        } else {
            let temp = new DoublyLinkListNode(value)
            temp.next = this.head
            this.head.prev = temp
            this.head = temp
        }
        this.size++
    }

    this.addAtTail = function(value) {
        if(this.tail === null) {
            this.tail = new DoublyLinkListNode(value)
            this.head = this.tail
        } else {
            let temp = new DoublyLinkListNode(value)
            temp.prev = this.tail
            this.tail.next = temp
            this.tail = temp
        }
        this.size++
    }

    this.addAtPosition = function(value, position) {
        let curPos = 0
        if(position <= 0) return this.addAtFront(value)
        if(position === this.size || position > this.size) return this.addAtTail(value)
        else {
            let temp = this.head
            let previous
            while(curPos !== position) {
                previous = temp
                temp = temp.next
                curPos++
            }
            let newNode = new DoublyLinkListNode(value)
            newNode.prev = previous
            newNode.next = temp
            previous.next = newNode
            temp.prev = newNode
            this.size++ 
        }
    }

    this.deleteAtHead = function() {
        let toReturn = null
        if(this.head !== null) {
            toReturn = this.head.data
            if(this.head === this.tail) {
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
            this.size--
        }
        return toReturn
    }

    this.deleteAtTail = function() {
        let toReturn = null
        if(this.tail !== null) {
            if(this.head === this.tail) {
                this.head = null
                this.tail = null
            } else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
            this.size--
        }
        return toReturn
    }

    this.deleteAtPosition = function(pos) {
        console.log(this.size, pos)
        if(pos >= 0 && pos <= this.size) {
            if(pos === 0) return this.deleteAtHead()
            if(pos === this.size) return this.deleteAtTail()
            else {
                let index = 0
                let current = this.head
                let previous
                while(index !== pos) {
                    previous = current
                    current = current.next
                }
                previous.next = current.next
                this.size--
            }
        } else return null
    }

    this.length = function() {
        return this.size
    }

    this.find = function(value) {
        toReturn = false
        if(!this.head !== null) {
            let currentHead = this.head
            while(currentHead) {
                if(currentHead.data === value) return true
                currentHead = currentHead.next
            } 
        }
        return toReturn
    }
}

let d1 = new DoublyLinkList()
d1.addAtFront(11)
d1.addAtFront(22)
d1.addAtFront(33)
d1.addAtFront(44)
d1.addAtTail(111)
d1.addAtTail(222)
d1.addAtPosition(101, 1)
//console.log(d1)
//d1.deleteAtTail()
//d1.deleteAtPosition(6)
//console.log(d1)
console.log(d1.find(2222))