let randomNumber = Math.floor(Math.random()*4)+1;
document.querySelector(".pictures").setAttribute("src","/dog"+randomNumber+".png");

let dogs = [];
loadDogs();
renderDogs();


function loadDogs (){
    dogs = JSON.parse(localStorage.getItem("dogs"))
    if (dogs==null){
        dogs=[]
    }

}

function renderDogs (){
    for (let i=0;i<dogs.length;i++){
        renderDog(dogs[i])
    }
}

function addDog () {
    let dog ={};
    dog.name = document.getElementById("name").value
    dog.age = document.getElementById("age").value
    dog.breed = document.getElementById("breed").value
    dog.weight = document.getElementById("weight").value
    dogs.push(dog)

    renderDog(dog)

    localStorage.setItem("dogs",JSON.stringify(dogs))
}

function renderDog (dog) {
    let box = document.createElement("div")
    document.body.appendChild(box)
    box.className = "box"

    let heading = document.createElement("h2")
    box.appendChild(heading)
    heading.innerText = dog.name

    let age = document.createElement("p")
    box.appendChild(age)
    age.innerText = dog.age+" years old"

    let breed = document.createElement("p")
    box.appendChild(breed)
    breed.innerText = dog.breed

    let weight = document.createElement("p")
    box.appendChild(weight)
    weight.innerText = dog.weight+" kilograms"


}