function stack() {
    let items = [], count = 0

    this.push = function(element) {
        items[count] = element
        count++
    }
    this.pop = function() {
        if(count === 0) return undefined

        let popped = items[count-1]
        delete items[count-1]
        count = count - 1 
        return popped
    }
    this.peek = function() {
        return items[count-1]
    }
    this.size = function() {
        return count
    }
    this.isEmpty = function() {
        return count === 0
    }
    this.print = function() {
        return console.log(items.join())
    }
    
}
/*
let x = new stack()
x.push(11)
x.push(22)
x.push(33)
x.push(44)
x.push(55)

console.log(x.size())
console.log(x.pop())

console.log(x.size())
console.log(x.pop())

console.log(x.size())
console.log(x.pop())

console.log(x.size())
console.log(x.pop())

console.log(x.size())
console.log(x.pop())

console.log(x.size())
console.log(x.pop())

console.log(x.size())

*/