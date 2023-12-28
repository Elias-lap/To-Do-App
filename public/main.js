// select Elements
const InputValue = document.getElementById("input");
const form = document.querySelector("form");
const budyTasks = document.getElementById("budy-tasks");
const task = document.getElementById("task");
const iconStar = document.querySelector(".fa-star")
const faFaceAngry = document.querySelector(".fa-face-angry");

// send Task Value
let Tasks = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = `
   <div class="task">
   <i class="fa-solid fa-star"></i>
   <p class="task-text" >${InputValue.value}</p>
   <div>
     <i class="fa-solid fa-trash"></i>
     <i class="fa-solid fa-face-angry"></i>
   </div>
   `;

  budyTasks.innerHTML += task;
  InputValue.value = ""
});
// with switch statment
budyTasks.addEventListener("click", (e) => {
  switch (e.target.className) {
    case "fa-solid fa-trash":
      e.target.parentElement.parentElement.remove();
      break;
    case "fa-solid fa-face-angry":
      const heart = `<i class="fa-solid fa-heart-circle-check"></i>`;
      e.target.classList.add("display-none");
      e.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finishTask");
  
    e.target.parentElement.innerHTML += heart;
      break;
    case "fa-solid fa-heart-circle-check":
      const angry = `<i class="fa-solid fa-face-angry"></i>`;
      e.target.classList.add("display-none");
      e.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.remove("finishTask");
  
      e.target.parentElement.innerHTML += angry;
      break;
    case "fa-solid fa-star":
      e.target.classList.add('changeColor');
      budyTasks.prepend(e.target.parentElement)
      break;
    case "fa-solid fa-star changeColor":
      e.target.classList.remove('changeColor');
      budyTasks.append(e.target.parentElement)
      break;
  
    default:
      break;
  }
});



// with if else statment

// if (e.target.className == "fa-solid fa-trash") {
//   e.target.parentElement.parentElement.remove();
// } else if (e.target.className == "fa-solid fa-face-angry") {
//   const heart = `<i class="fa-solid fa-heart-circle-check"></i>`;
//   e.target.classList.add("display-none");

//   e.target.parentElement.parentElement
//     .getElementsByClassName("task-text")[0]
//     .classList.add("finishTask");

//   e.target.parentElement.innerHTML += heart;
// } else if (e.target.className == "fa-solid fa-heart-circle-check") {
//   const angry = `<i class="fa-solid fa-face-angry"></i>`;
//   e.target.classList.add("display-none");
//   e.target.parentElement.parentElement
//     .getElementsByClassName("task-text")[0]
//     .classList.remove("finishTask");

//   e.target.parentElement.innerHTML += angry;
// }else if(e.target.className =="fa-solid fa-star"){
//   e.target.classList.add('changeColor');
//   budyTasks.prepend(e.target.parentElement)
// }else if(e.target.className =="fa-solid fa-star changeColor"){
//   e.target.classList.remove('changeColor');
//   budyTasks.append(e.target.parentElement)
// }