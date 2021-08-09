function Stack() {
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
    this.isEmpty = function() {
        return count === 0
    }
}

function divideByTwo(decNumber) {
    let remStack = new Stack()
    let quo, binaryString = ''
    if(decNumber === 0) return 0
    
    while(decNumber > 0) {
        remStack.push(decNumber % 2)
        
        decNumber = Math.floor(decNumber / 2)
    }
    while(!remStack.isEmpty()) {
        binaryString += remStack.pop()
    }
    return binaryString
}

console.log(divideByTwo(5))