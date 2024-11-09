let count=0

let countEl = document.getElementById('count-el')

function increment() {
	count=count + 1
countEl.textContent = count
	console.log(count)
}



let saveEl = document.getElementById('save-el')
function save() {
	let sep = count +  '  -   '
	saveEl.textContent += sep
	console.log(count)
    countEl.textContent = 0
    count = 0
} 