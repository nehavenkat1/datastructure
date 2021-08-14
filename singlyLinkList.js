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

    this.remove = function(value) { // remove particular element
        let currentHead = this.head
        if(currentHead.data === value) {
            if(currentHead.next === null) {
                this.head = null
                this.size--
                return
            } else {
                this.head = currentHead.next
                currentHead = null
                this.size--
                return
            }
        } else {
            let prev = currentHead

            while(currentHead.next !== null) {
                if(currentHead.data === value) {
                    prev.next = currentHead.next
                    break
                }
                prev = currentHead
                currentHead = currentHead.next
            }
            if(currentHead.next === null && currentHead.data === value) {
                prev.next = null
            }
            this.size--
        }
    }

    // remove from head
    this.removeFromHead = function() {
        let toReturn = null
        if(this.head !== null) {
            if(this.head.next === null) {//head === tail
                this.head = null
                this.size = 0
                return toReturn
            } else {
                let temp = this.head
                this.head = this.head.next
                temp = null
                this.size--
                return this.head
            }
        } else {
            return toReturn
        }
    }

    //remove from tail

    this.removeFromTail = function() {
        let current = this.head
        let toReturn = null
        if(current === null) { // no data
            return toReturn
        } else if(current.next === null) { // head === tail
            this.head = null
            this.size = 0
            return toReturn
        } else {
            let prev = current
            while(current.next !== null) {
                prev = current
                current = current.next
            }
            prev.next = null
            this.size--
        }
    }
    // remove particular position
/*
    this.removePosition = function(position) {

    }*/

    this.indexOf = function(value) {
        let currentHead = this.head
        let index = -1
        while(currentHead.next) {
            if(currentHead.data === value) {
                return index+1
            }
            currentHead = currentHead.next
            index = index+1
        }
        return currentHead.data === value ? index+1 : -1
    }


    this.search = function(value) {
        let currentHead = this.head
        while(currentHead.next) {
            if(currentHead.data === value) {
                return true
            }
            currentHead = currentHead.next
        }
        return currentHead.data === value
    }
}

let s1 = new SinglyLinkList()
s1.insert(11)
s1.insert(22)
s1.insert(33)
s1.insert(44)
s1.insert(55)
s1.insert(66)
s1.remove(55)
console.log(s1)
/*s1.remove(22)
console.log(s1)
s1.remove(33)
console.log(s1)*/
/*console.log(s1.search(11))
console.log('index = ', s1.indexOf(66))*/

