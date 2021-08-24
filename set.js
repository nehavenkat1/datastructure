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

    this.values = function() {
        let keys = Object.keys(items), arr = []
        for(let i=0; i<keys.length; i++) {
            arr.push(items[keys[i]])
        }
        return arr
    }

    this.union = function(anotherSet) {
        let unionSet = new Set() 
        let values = this.values()
        for(let i=0; i<values.length; i++) {
            unionSet.add(values[i])
        }
        let anotherValues = anotherSet.values()
        for(let i=0; i<anotherValues.length; i++) {
            unionSet.add(anotherValues[i])
        }
        return unionSet
    }

    this.interSection = function(anotherSet) {
       let interSectionSet = new Set()
       let keys = this.values()
       for(let i=0; i<keys.length; i++) {
           if(anotherSet.has(keys[i])) interSectionSet.add(keys[i])
       }
       return interSectionSet
    }

    this.difference = function(anotherSet) {
        let differenceSet = new Set() 
        let val = this.values()
        for(let i=0; i<val.length; i++) {
            if(!anotherSet.has(val[i])) differenceSet.add(val[i])
        }
        return differenceSet
    }

    this.subset = function(anotherSet) {
        if(this.size() > anotherSet.size()) return false
        let val = this.values()
        for(let i=0; i<val.length; i++) {
            if(!anotherSet.has(val[i])) return false
        }

        return true
    }
}

let s1 = new Set()
s1.add(2)
s1.add(1)
s1.add(4)
s1.add(6)
s1.add(8)
s1.add(10)
console.log('s1 = ',s1.values())
let s2 = new Set()
s2.add(1)
s2.add(4)
s2.add(3)
s2.add(5)
s2.add(7)
console.log('s2 = ',s2.values())
let uniSet = s1.union(s2)
console.log('union = ',uniSet.values())
let intersection = s1.interSection(s2)
console.log('intersection = ', intersection.values())
let differ = s1.difference(s2)
console.log('difference = ',differ.values())
console.log(s1.subset(s2))
