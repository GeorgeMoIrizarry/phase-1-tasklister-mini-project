document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const unordered = document.querySelector("#tasks")
    let list = document.createElement("li")
    let btn = document.createElement("button")
    let newSelect = document.createElement("select")
    let priority = ["High", "Med", "Low"]
    btn.textContent = ("x")
    let appendingUl = () => {
      list.innerText = `${e.target.newTaskDescription.value} `
      unordered.appendChild(list)
      list.appendChild(newSelect)
      list.appendChild(btn)
      
    }
    appendingUl()
    btn.addEventListener("click", () => {
      list.remove()
    } )
    let modifyingSelect = () => {
      for(let i = 0 ; i < priority.length; i++) {
      let selectPriority = priority[i]
      let newOption = document.createElement("option")
      newOption.textContent = selectPriority
      newOption.value = selectPriority
      newSelect.appendChild(newOption)
      console.log(newOption)
      
      }
    }
    modifyingSelect()
    newSelect.addEventListener("click", () => {
      console.log("Hello")
      if (newSelect.value === "High") {
         list.style.backgroundColor = ("red")
        } else if (newSelect.value === "Med") {
          list.style.backgroundColor = ("yellow")
        } else if (newSelect.value === "Low") {
          list.style.backgroundColor = ("green")
        } else  {
          list.style.backgroundColor = ("white")
        }
    })
  })

});

