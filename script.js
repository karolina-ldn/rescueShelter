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
    dog.gender = document.getElementById("gender").checked
    dog.age = document.getElementById("age").value
    dog.breed = document.getElementById("breed").value
    dog.neutered = document.getElementById("neutered").checked
    dog.chipped = document.getElementById("chipped").checked
    dog.vaccinated = document.getElementById("vaccinated").checked
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

    let gender = document.createElement("p")
    box.appendChild(gender)
    gender.innerText = dog.gender ? "male" : "female"

    let age = document.createElement("p")
    box.appendChild(age)
    age.innerText = "age: "+dog.age

    let breed = document.createElement("p")
    box.appendChild(breed)
    breed.innerText = "breed: "+dog.breed

    let neutered = document.createElement("p")
    box.appendChild(neutered)
    neutered.innerText = dog.neutered ? "neutered" : "not neutered"

    let chipped = document.createElement("p")
    box.appendChild(chipped)
    chipped.innerText = dog.chipped ? "chipped" : "not chipped"

    let vaccinated = document.createElement("p")
    box.appendChild(vaccinated)
    vaccinated.innerText = dog.vaccinated ? "vaccinated" : "not vaccinated"


    let weight = document.createElement("p")
    box.appendChild(weight)
    weight.innerText = "weight: "+dog.weight+" kilograms"

    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete position"
    box.appendChild(deleteButton)

    deleteButton.addEventListener("click",deleteDog)
    deleteButton.dataset.index = i

}

function deleteDog (e){
    let button = e.target
    let i = button.dataset.index

    dogs.splice(i,1)

    renderDogs()

    localStorage.setItem("dogs", JSON.stringify(dogs))
}