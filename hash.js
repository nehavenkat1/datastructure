function Hash() {
    let table = []

    this.loseloseHashCode = function(key) {
        let hash = 0
        for(let i=0; i<key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }
    /*
    this.put = function(key, value) {
        let position = this.loseloseHashCode(key)
        console.log(position, key)
        table[position] = value
    }*/

    /*this.get = function(key) {
        let position = this.loseloseHashCode(key)
        return table[position]
    }*/

    this.remove = function(key){
        table[this.loseloseHashCode(key)] = undefined
    }

    this.print = function() {
        for(let i=0; i<table.length; i++) {
            if(table[i] !== undefined){
                console.log(i, table[i])
            }
        }
    }

    let ValuePair = function(key, value) {
        this.key = key
        this.value = value

        this.toString = function() {
            return '[' + this.key +' - '+ this.value + ']'
        }
    }

    this.put = function(key, value) {
        let position = this.loseloseHashCode(key)
        if(table[position] === undefined) {
            table[position] = new ValuePair(key, value)
        } else {
            let index = ++position
            while(table[index] !== undefined) {
                index++
            }
            table[index] = new ValuePair(key, value)
        }
    }

    this.get = function(key) {
        let position = this.loseloseHashCode(key)

        if(table[position] !== undefined) {
            if(table[position].key === key) {
                return table[position].value
            } else {
                let index = ++position
                while(table[index] === undefined || table[index].key !== key) {
                    index++
                }
                if(table[index].key === key) return table[index].value
            }
        }

        return undefined
    }
}



let h1 = new Hash()
h1.put('first', 'This is first')
h1.put('second', 'This is second')
h1.put('third', 'This is third')

console.log(h1.get('first'))
console.log(h1.get('second'))
console.log(h1.get('third'))
h1.remove('first')
console.log(h1.get('first'))
h1.print()