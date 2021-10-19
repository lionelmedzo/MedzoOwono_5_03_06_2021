// Creation de 3 tableau de string
function getDistinctIngredients ()  
{
  let toReturn = [];
  for(let recipe of recipes)
  {
    for(let ingredient of recipe.ingredients)
    {
      if(!toReturn.includes(ingredient.ingredient.toLowerCase()))
      {
        toReturn.push(ingredient.ingredient.toLowerCase());
      }
    }
  }
  return toReturn;
}
function getDistinctUstensils ()  
{
  let toReturn = [];
  for(let recipe of recipes)
  {
    for(let ustensil of recipe.ustensils)
    {
      if(!toReturn.includes(ustensil.toLowerCase()))
      {
        toReturn.push(ustensil.toLowerCase());
      }
    }
  }
  return toReturn;
}
function getDistinctAppliances()
{
  let toReturn = [];
  for(let recipe of recipes)
  {
      if(!toReturn.includes(recipe.appliance.toLowerCase()))
      {
        toReturn.push(recipe.appliance.toLowerCase());
      }
  }
  return toReturn;
}


// ----------------------------------------------------------------------------------------
function displayDistinctItemsDropdown (distinctIngredients = [], dropdownName) 
{
  var ingredientsDropdownMenu = document.getElementById(dropdownName);
  var ingredientContainer = document.createElement("ul");
  for(var i=0; i< distinctIngredients.length; i++)
  {
    var ingredient = distinctIngredients[i];
    const ingredientLink = document.createElement("li");
    ingredientLink.id = "ingredients";
    ingredientLink.innerText = ingredient;
    ingredientLink.addEventListener("click",mouvIngredient);
    ingredientsDropdownMenu.appendChild(ingredientLink);
  }
  ingredientsDropdownMenu.appendChild(ingredientContainer);
}


function displayDistinctItemsDropdown2 (distinctUstensils = [], dropdownName2) 
{
  var ustensilsDropdownMenu = document.getElementById(dropdownName2);
  var ustensilsContainer = document.createElement("ul");
  for(var i=0; i< distinctUstensils.length; i++)
  {
    var ustensils = distinctUstensils[i];
    const ustensilsLink = document.createElement("li");
    ustensilsLink.id = "ustensils";
    ustensilsLink.innerText = ustensils;
    ustensilsLink.addEventListener("click",mouvUstensils);
    ustensilsDropdownMenu.appendChild(ustensilsLink);
  }
  ustensilsDropdownMenu.appendChild(ustensilsContainer);
}


function displayDistinctItemsDropdown3 (distinctAppliance = [], dropdownName3) 
{
  var appliancesDropdownMenu = document.getElementById(dropdownName3);
  var appliancesContainer = document.createElement("ul");

  for(var i=0; i< distinctAppliance.length; i++)
  {
    var appliances = distinctAppliance[i];
    const appliancesLink = document.createElement("li");
    appliancesLink.id = "appliances";
    appliancesLink.innerText = appliances;
    appliancesLink.addEventListener("click", mouvAppliances);
    appliancesDropdownMenu.appendChild(appliancesLink);
    
  }
  appliancesDropdownMenu.appendChild(appliancesContainer);
}
function mouvIngredient(event){
  var ingredientItem = event.target;
  const reponse = document.getElementById("reponse-dropdown");
  console.log(ingredientItem);
  var indexOfIngredient = "ingredientItem.id";
  var tagIngredient = document.createElement("div");
  tagIngredient.className="ingredient_tag";
  tagIngredient.setAttribute("data-ingredient-id","indexOfIngredient");
  tagIngredient.innerText = distinctIngredients[indexOfIngredient];
  reponse.appendChild(ingredientItem);
  //var tag = event.target;
 //var indexIngredient = tag.getAttribute("data-ingredient-id");
}


function mouvUstensils(event){
  var ustensilsItem = event.target;
  const reponse = document.getElementById("reponse-dropdown");
  console.log(ustensilsItem);
  var indexOfUstensils = ustensilsItem.id;
  var tagUstensils = document.createElement("div");
  tagUstensils.className="ustensils_tag";
  tagUstensils.setAttribute("data-ustensils-id",indexOfUstensils);
  tagUstensils.innerText = distinctUstensils[indexOfUstensils];
  reponse.appendChild(ustensilsItem);
  

}


function mouvAppliances(event){
  var appliancesItem = event.target;
  const reponse = document.getElementById("reponse-dropdown");
  console.log(appliancesItem);
  var indexOfAppliances = appliancesItem.id;
  var tagAppliances = document.createElement("div");
  tagAppliances.className="appliances_tag";
  tagAppliances.setAttribute("data-appliances-id",indexOfAppliances);
  tagAppliances.innerText = distinctAppliance[indexOfAppliances];
  reponse.appendChild(appliancesItem);

}
// fonction supprimer un ingredient, ustensils, appareils choisi
/*document.getElementById("ingredientsDropdownMenu").addEventListener("click",function(){
  var inputIngredient = document.getElementById('ingredients');
  var ingredient= document.getElementById("ingredientsDropdownMenu");
  inputIngredient.parentNode.removeChild(inputIngredient); // effacement de l'element
  ingredient.appendChild(inputIngredient);
  alert("ingredient click");
});*/
function supprimer(){ // onclick sur le HTML
  var inputIngredient = document.getElementById('ingredients');
  var ingredient= document.getElementById("ingredientsDropdownMenu");

  var inputUstensils = document.getElementById('ustensils');
  var ustensils = document.getElementById("ustensilsDropdownMenu");
  
  if(inputIngredient.click){ // si on click sur l'element
    inputIngredient.parentNode.removeChild(inputIngredient); // effacement de l'element
    ingredient.appendChild(inputIngredient);// element replacer dans la liste des ingredeients
    alert("ingredient click");
  }
  if(inputUstensils.click){
    inputUstensils.parentNode.removeChild(inputUstensils);
    ustensils.appendChild(inputUstensils);
    alert("ustensils click");
  }
 
}



function displayAllItems(items)
{
  var itemsContainer = document.getElementById("itemsContainer");


  for(let recipe of items)
  {
    

    itemsContainer.innerHTML += `
    <div id="${recipe.id}" class="p-2 bd-highlight">
      <img class="gray" src="./img/image_grise.jpg" alt="image grise">
      <div class ="recettes-descritpion">
          <div class ="description-ingredient">
              <h6>${recipe.name}</h6>
              <ul id="ingredient-list">
                 ${recipe.ingredients.map(i =>{
                   if(i.quantity){
                    return (`<li><b>${i.ingredient}</b>: ${i.quantity} ${i.unit??``} </li>`);
                    } else {
                      return `<li><b>${i.ingredient}</b></li>`}}).join('')
                  /* correspond a un if else*/ 
                    }
                   
                 
              </ul>
          </div>
      
          <div class="description-action">
              <h6 class="time"><i class="far fa-clock"></i> ${recipe.time}min</h6>
              <span>${recipe.description}
              </span>
              <span>${recipe.description}</span>
          </div>
      </div>`
  }
}
const search = document.querySelector(".navbar");
const input = search.querySelector("input");
input.onkeyup=(e)=>{
  let userData = e.target.value; 
 if(userData.length > 2 || reponse) 
  {
    filteredRecipes = recipes.filter(r => !r.name.includes(userData) && 
                                          !r.appliance.includes(userData) &&
                                          r.ustensils.filter(u => u.includes(userData)).length == 0 &&
                                          r.ingredients.filter(i => i.ingredient.includes(userData)).length == 0);

/*let i;
const filteredFriends = [];

for (i = 0; i < users.length; i += 1) {
  if (this.isUserExist(users[i]) {
    filteredFriends.push(users[i]);
  }
}
let filteredFriends = users.filter(user => {
    return this.isUserExist(user);
});*/

    filteredRecipes.map(r =>
      {
        document.getElementById(r.id).style.display = "none"
      })
  }
  else
  {
    recipes.map(r =>
      {
        document.getElementById(r.id).style.display = "block"
      })
  }
}



var distinctIngredients = getDistinctIngredients();
var distinctUstensils = getDistinctUstensils();
var distinctAppliance = getDistinctAppliances();


displayDistinctItemsDropdown(distinctIngredients, "ingredientsDropdownMenu");
displayDistinctItemsDropdown2(distinctUstensils, "ustensilsDropdownMenu");
displayDistinctItemsDropdown3(distinctAppliance, "appareilsDropdownMenu");
displayAllItems(recipes);