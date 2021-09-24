// DoIt TS p.17

let person = {name2: "Jane", age: 22}
let {name2, age} = person  // name = "Jane", age = 22

let array = [1, 2, 3, 4]
let [head, ...rest] = array  // head = 1, rest = [2, 3, 4]

let a = 1, b =2;
[a, b] = [b, a]  // a = 2, b = 1 (교환swap)