console.log(`working`);

let itemName = document.querySelector("#item-name");
let itemNameValue = itemName.value;
let listForm = document.querySelector("#list-form");
listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newP = document.createElement("p");
  document.body.appendChild(newP);
  newP.innerHTML = itemName.value;
  newP.setAttribute("class", "alert alert-success ");
  let deleteBtn = document.createElement("button");
  newP.appendChild(deleteBtn);
  deleteBtn.innerHTML = "X";
  deleteBtn.setAttribute("class", "btn btn-warning  float-end ");
  deleteBtn.addEventListener("click", () => {
    newP.style.display = "none";
  });
});
