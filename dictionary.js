function Dictionary() {
    let items = {}

    this.has = function(key) {
        return items.hasOwnProperty(key)
    }

    this.set = function(key, val) {
        items[key] = val
    }

    this.size = function() {
        return Object.keys(items).length
    }

    this.delete = function(key) {
        if(this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined
    }

    this.values = function() {
        let arr = []
        for(let key in items) {
            if(this.has(key))
                arr.push(items[key])
        }
        return arr
    }

    this.keys = function() {
        return Object.keys(items)
    }

    this.getItems = function() {
        return items
    }
}

let d1 = new Dictionary() 
d1.set('first', 'This is first')
d1.set('second', 'This is second')
d1.set('third', 'This is third')
console.log(d1.has('second'))
console.log(d1.size())
console.log(d1.keys())
console.log(d1.values())
console.log(d1.getItems())
d1.delete('first')
console.log(d1.getItems())
