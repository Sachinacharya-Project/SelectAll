const select_all = document.getElementById('all')
const other_div = document.querySelectorAll(".item")
let count = 0
let isSelectedAll = false
// Selecting/Delecting All
const AllFunction = ()=>{
    if(isSelectedAll){
        other_div.forEach(inp=>{
            inp.checked = false
            isSelectedAll = false
        })
        count = 0
    }else{
        other_div.forEach(inp=>{
            inp.checked = true
            isSelectedAll = true
        })
        count = other_div.length
    }
}
select_all.addEventListener('click', AllFunction)
other_div.forEach(inp=>{
    inp.addEventListener('click', ()=>{
        if (inp.checked){
            count++
        }else{
            count--
        }
        if(count == other_div.length){
            select_all.checked = true
        }else{
            select_all.checked = false
        }
    })
})

// Getting All the Values of Selected items