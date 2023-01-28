let completed = false;
let array = [];
let box = document.querySelector("main");
let addTask = document.querySelector(".add");
let input = document.querySelector("#add-task");
let footer = document.querySelector("footer");
let x;

document.addEventListener("keydown", function (e){
    if (e.code == "Enter"){
        addContent(input.value);
        input.value = "";
    }
})

addTask.addEventListener("click", function (){
    if (input.value === ""){
        alert("Введите Task");
    }else{
        addContent(input.value);
        input.value = "";
    }
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
    let buttun = document.createElement("button");
    buttun.classList.add("remuve");
    div.append(buttun);
    buttun.addEventListener("click", function (e){
        console.log(e.target)
        e.target.parentElement.remove();
    })
    div.addEventListener("click", function (e){
        e.target.style.backgroundColor = "#94ADCF";
        if (completed){
            e.target.style.backgroundColor = "";
            completed = false;
        }else{
            completed = true;
        }
        for (i of array){
            if(completed){
                e.target.parentElement.classList.remove("notComplete");
                e.target.parentElement.classList.add("complete");
                x = e.target.nextElementSibling.innerHTML;
                addContentInFooter();
                console.log(e.target);
                e.target.parentElement.remove();
                break;
            }else{
                e.target.parentElement.classList.add("notComplete");
                e.target.parentElement.classList.remove("complete");
            }
        }
    })
}
function addContentInFooter (){
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
    img.style.backgroundColor = "#94ADCF";
    let buttun = document.createElement("button");
    buttun.classList.add("remuve");
    div.append(buttun);
    buttun.addEventListener("click", function (e){
        console.log(e.target)
        e.target.parentElement.remove();
    })
    div.addEventListener("click", function (e){
        e.target.parentElement.classList.add("notComplete");
        e.target.parentElement.classList.remove("complete");
        addContent(e.target.nextElementSibling.innerHTML);
        e.target.parentElement.remove();
    })
}