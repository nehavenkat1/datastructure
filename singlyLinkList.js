function SinglyLinkListNode(data) {
    this.data = data
    this.next = null
}

function SinglyLinkList() {
    this.head = null
    this.size = 0

    this.isEmpty = function() {
        return this.size === 0
    }

    this.insert = function(value) {
        if(this.head === null) {
            this.head = new SinglyLinkListNode(value)
        } else {
            let temp = this.head
            this.head = new SinglyLinkListNode(value)
            this.head.next = temp
        }
        this.size++
    }

    this.remove = function(value) {
        let currentHead = this.head
        if(currentHead.data === value) {
            this.head = currentHead.next
            this.size--
        } else {
            let prev = currentHead
            while(currentHead.next) {
                if(currentHead.data === value) {
                    
                }
                prev = currentHead
                currentHead = currentHead.next
            }
        }
    }
}

let s1 = new SinglyLinkList()
s1.insert(11)
s1.insert(22)
s1.insert(33)
console.log(s1)

