// Const
const elm_inputs = document.querySelectorAll("input")

// Functions
const encode = (s) => {
    let res = ""
    for(let i=0;i<s.length-1;i+=2) {
        res += s[i+1]
        res += s[i]
    }
    if(s.length % 2 !== 0) res += s[s.length-1]
    return res
}

const decode = (s) => {
    let res = ""
    for(let i=0;i<s.length-1;i+=2) {
        res += s[i+1]
        res += s[i]
    }
    if(s.length % 2 !== 0) res += s[s.length-1]
    return res
}

// Test
// const msg = "سلام بر ریاضیات"
// const msg = "himax"
// console.log( encode(msg) )
// console.log( decode(encode(msg)) )
// console.log( encode(encode(msg)) )

// Events
elm_inputs[0].addEventListener("input", function (e) {
    elm_inputs[1].value = encode(e.target.value)
    alert(this.value)
})

elm_inputs[1].addEventListener("input", function (e) {
    elm_inputs[0].value = decode(e.target.value)
})

window.addEventListener("load", () => {
    const event = new Event('input', {
        bubbles: true,
        cancelable: true,
    })
    elm_inputs[0].dispatchEvent(event)
})
