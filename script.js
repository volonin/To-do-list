let completed = false;
let array = [];
let arrayText = [];
let box = document.querySelector("main");
let addTask = document.querySelector(".add");
let input = document.querySelector(".add-task");
let footer = document.querySelector("footer");
let remuving;
let x = 0;
let textDate;
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let dayToday = new Date();
let dayNow = dayToday.getDate();
day.value = `${dayToday.getDate()}`;
month.value = `0${dayToday.getMonth() + 1}`;
document.addEventListener("keydown", function (e){
    if (e.code == "Enter") {
        if (input.value === "") {
            alert("Введите Task");
        }else{
            addContent(input.value);
            input.value = "";
        }
    }
})

addTask.addEventListener("click", function (){
    if (input.value === ""){
        alert("Введите Task");
    }else{
        x = 0;
        addContent(input.value);
        input.value = "";
    }
})
addTask.addEventListener("mouseover", function (){
    addTask.firstElementChild.src = "Img/Group1.png";
})
addTask.addEventListener("mouseout", function (){
    addTask.firstElementChild.src = "Img/Group.png";
})
function addContent (value){
    let div = document.createElement("div");
    div.classList = "completed";
    div.classList.add("notComplete");
    box.append(div);
    array.push(div);
    let img = document.createElement("img");
    img.classList = "checkbox";
    img.src = "Img/Ellipse%201.png";
    div.append(img);
    let text = document.createElement("span");
    text.innerHTML = value;
    text.classList = "text";
    div.append(text);
    text = document.createElement("p");
    text.classList.add("date-p");
    switch (x){
        case 0:text.innerHTML = `Выполнить до - ${day.value}.${month.value}`;
        break;
        case 1:text.innerHTML = textDate;
        break;
    }
    box.lastElementChild.append(text);
    arrayText.push(text);
    let buttun = document.createElement("button");
    buttun.classList.add("remuve");
    div.append(buttun);

    buttun.addEventListener("click", function (e){
        remuving = e.target.parentElement;
        e.target.parentElement.remove();
        let x = 0;
        for (i of array){
            if (i === remuving){
                array.splice(x, 1);
                break;
            }
            x++;
        }
        text = arrayText[x];
        text.remove();
        arrayText.splice(x, 1);
        console.log(text, arrayText);
    })
    img.addEventListener("click", function (e){
        remuving = e.target.parentElement;
        img.style.backgroundColor = "#94ADCF";
        completed = true;
        img.parentElement.classList.remove("notComplete");
        img.parentElement.classList.add("complete");
        x = img.nextElementSibling.innerHTML;
        textDate = e.target.parentElement.lastElementChild.previousElementSibling.innerHTML;
        addContentInFooter();
        img.parentElement.remove();
    })
    if (dayNow > day.value && dayToday.getMonth() + 1 >= month.value){
        div.style.backgroundColor = "#e55e5e";
        // buttun.style.backgroundColor = "#ff2424";
    }

    }
function addContentInFooter () {
    let div = document.createElement("div");
    div.classList = "completed";
    div.classList.add("complete");
    footer.append(div);
    let img = document.createElement("img");
    img.classList = "checkbox";
    img.src = "Img/Ellipse%201.png";
    div.append(img);
    let text = document.createElement("span");
    text.innerHTML = `${x}`;
    text.classList = "text";
    div.append(text);
    text = document.createElement("p");
    text.classList.add("date-p");
    text.innerHTML = `${textDate}`;
    footer.lastElementChild.append(text);
    arrayText.push(text);
    img.style.backgroundColor = "#F7F5EB";
    let buttun = document.createElement("button");
    buttun.classList.add("remuve");
    div.append(buttun);


    buttun.addEventListener("click", function (e) {
        e.target.parentElement.remove();
    })
    img.addEventListener("click", function (e) {
        img.parentElement.classList.add("notComplete");
        img.parentElement.classList.remove("complete");
        x = 1;
        textDate = e.target.parentElement.lastElementChild.previousElementSibling.innerHTML;
        addContent(img.nextElementSibling.innerHTML);
        img.parentElement.remove();
    })
}
