// Const
const elm_inputs = document.querySelectorAll("input")

// Functions
const alphabets = "یهونملگکقفغعظطضصشسژزرذدخحچجثتپباء" + "abcdefghijklmnopqrstuvwxyz"
const letters = alphabets.split("")

const encode = (s) => {
    let res = ""
    for(let i=0;i<s.length;i++) {
        const index1 = letters.indexOf(s[i])
        if(index1 !== -1) res += alphabets[alphabets.length - 1 - index1]
        else res += s[i]
    }
    return res
}

const decode = (s) => {
    let res = ""
    for(let i in letters) console.log(i, letters[i])
    // console.log(letters)
    for(let i=0;i<s.length;i++) {
        const index1 = letters.indexOf(s[i])
        console.log(s[i], index1, alphabets.length, alphabets.length - index1)
        if(index1 !== -1) res += alphabets[alphabets.length - index1 -1]
        else res += s[i]
    }
    return res
}

// Test
// const msg = "سلام بر ریاضیات"
const msg = "himax"
console.log( encode(msg) )
console.log( decode(encode(msg)) )
// console.log( encode(encode(msg)) )

// Events
elm_inputs[0].addEventListener("input", (e) => {
    elm_inputs[1].value = encode(e.target.value)
})

elm_inputs[1].addEventListener("input", (e) => {
    elm_inputs[0].value = decode(e.target.value)
})

window.addEventListener("load", () => {
    const event = new Event('input', {
        bubbles: true,
        cancelable: true,
    })
    elm_inputs[0].dispatchEvent(event)
})
