let myLeads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("d-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function (){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItem = ""
    for (let i = 0; i < leads.length; i++) {
        listItem +=
            `<li>
            <a href = ${leads[i]} target = "_blank">
            ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputbtn.addEventListener("click", function () {
    if (inputEl.value) {
        myLeads.unshift(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
})