window.addEventListener("keydown", function (e) {
    e.preventDefault();
    numberEle.forEach((button) => {
      if (button.innerText === e.key) button.click();
    });
    operator.forEach((button) => {
      if (button.innerText === e.key) button.click();
    });
  
    switch (e.key) {
      case "Enter":
        compute.click();
        break;
      case "Backspace":
        del.click();
        break;
      case "Delete":
        clear.click();
        break;
    }
  });
  

let exp = "" ;

const calculator = document.createElement("div");
calculator.setAttribute("class", "container");
document.body.appendChild(calculator);

const display = document.createElement('input')
display.setAttribute("type","text")
display.setAttribute("class", "display")
display.setAttribute("value",exp)
calculator.appendChild(display)



// var array = ["Clear", "Del" , "%" , "/", 7,8,9,"*",4,5,6,"-",1,2,3,"+",0,"00",".","="] 
var array = [{label:"Clear",dataset:"clear"},{label:"Del",dataset:"delete"},{label:"%",dataset:"operator"},{label:"/",dataset:"operator"},{label:7,dataset:"number"},{label:8,dataset:"number"},{label:9,dataset:"number"},{label:"*",dataset:"operator"},{label:4,dataset:"number"},{label:5,dataset:"number"},{label:6,dataset:"number"},{label:"-",dataset:"operator"},{label:1,dataset:"number"},{label:2,dataset:"number"},{label:3,dataset:"number"},{label:"+",dataset:"operator"},{label:0},{label:"00",dataset:"number"},{label:".",dataset:"number"},{label:"=",dataset:"equals"}]

for(i=0;i<=array.length-1; i++) {
    //,dataset:"number,dataset:"operator"" const dis,dataset:"n,dataset:"number"umber"play,dataset:"number" = documen,dataset:"number"t.createElem,dataset:"operator"ent("input")
    const btn = document.createElement("button")
    btn.setAttribute("class","button")
    btn.setAttribute(`data-${array[i].dataset}`,"")
    btn.innerHTML = array[i].label
    calculator.appendChild(btn);
    // btn.addEventListener("click",(event) => {
    //     exp = exp + btn.innerText
    //     } )
}

display.addEventListener("keydown", () => {
    console.log(display.value)
})

const numberEle = document.querySelectorAll("[data-number]")
numberEle.forEach((button) => button.addEventListener("click",(e) => {
    exp = exp.toString() + (button.innerText).toString();
    console.log(exp)
    display.value =exp;
}))

const clear = document.querySelectorAll("[data-clear]")
clear.forEach((button) => button.addEventListener("click",(e) => {
    exp = ""
    display.value =exp;
}))

const del = document.querySelector("[data-delete]")
del.addEventListener("click",(e) => {
    exp = exp.slice(0, -1)
    display.value =exp
})

const operator = document.querySelectorAll("[data-operator]")
operator.forEach((button) => button.addEventListener("click",() => {
    var lastChar = ["/","-","*","+","%",""]
    if(!lastChar.includes(exp.charAt(exp.length-1))){
      exp = exp + button.innerText;
      display.value = exp;
    }
}))

const compute = document.querySelector("[data-equals]")
compute.addEventListener("click",(e) => {
    exp = eval(exp).toString();
    display.value =exp
})