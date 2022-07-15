const searchFruit = document.querySelector("#fruits_input");
const allFruitCollection = document.querySelectorAll(".fruit");
searchFruit.addEventListener("keyup", (event) => {
  const searchQuery = event.target.value;
  for (let i = 0; i < allFruitCollection.length; i++) {
    // console.log(allFruitCollection[i].textContent);
    const currentFruit = allFruitCollection[i].textContent.toLocaleLowerCase();
    if (currentFruit.includes(searchQuery.toLocaleLowerCase())) {
      allFruitCollection[i].style.display = "block";
    } else {
      allFruitCollection[i].style.display = "none";
    }
  }
});
