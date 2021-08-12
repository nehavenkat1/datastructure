function Queue() {
    let items = []

    this.enqueue = function(element) {
        items.push(element)
    }

    this.dequeue = function() {
        return items.length !== 0 ? items.shift() : 'Empty queue.'
    }

    this.front = function() {
        return items.length !== 0 ? items[0] : 'Empty queue.'
    }

    this.isEmpty = function() {
        return items.length === 0
    }

    this.size = function() {
        return items.length
    }

    this.print = function() {
        return items.toString()
    }
}

let x = new Queue() 
x.enqueue('A')
x.enqueue('B')
x.enqueue('C')
x.enqueue('D')
console.log(x.print())
console.log(x.size())
console.log(x.isEmpty())
console.log(x.front())
console.log(x.dequeue())
console.log(x.print())