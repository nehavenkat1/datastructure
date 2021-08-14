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
}

let d1 = new DoublyLinkList()
d1.addAtFront(11)
d1.addAtFront(22)
d1.addAtFront(33)
d1.addAtFront(44)
console.log(d1)