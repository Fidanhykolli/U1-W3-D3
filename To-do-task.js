const formPage = document.getElementById("firstDiv");
formPage.addEventListener("submit", function (e) {
  e.preventDefault();

  const textInput = document.getElementById("Texts");
  console.log(textInput.value);

  const userTasks = document.createElement("div");
  userTasks.classList = "paragrafi";
  userTasks.innerHTML = `
<p> ${textInput.value} <button class="deleteButton">Delete Me</button>  </p> 

`;

  const newTasks = document.getElementById("theTasks");
  newTasks.appendChild(userTasks);

  const deleteButton = userTasks.querySelector(".deleteButton");
  deleteButton.addEventListener("click", function () {
    newTasks.removeChild(userTasks);
  });

  userTasks.addEventListener("click", function () {
    userTasks.classList.toggle("completed");
  });

  textInput.value = "";
});
