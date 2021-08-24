function Set() {
    let items = {}

    this.size = function() {
        return Object.keys(items).length
    }

    this.has = function(value) {
        return items.hasOwnProperty(value)
    }

    this.add = function(value) {
        if(!this.has(value)) {
            items[value] = value
            console.log(items)
            return true
        }
        return false
    }

    this.delete = function(value) {
        if(this.has(value)) {
            delete items[value]
            return true
        }
        return false
    }

    this.showItems = function() {
        console.log(items)
    }
    
    this.clear = function() {
        items = {}
    }
}

let s1 = new Set()
s1.add(4)
s1.add(6)
s1.add(8)
console.log(s1.size())
s1.delete(4)
console.log(s1.showItems())