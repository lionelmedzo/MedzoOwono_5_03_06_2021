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
  var tagIngredient = document.createElement("ul");
  var ingredientTag = ingredientItem;
  ingredientTag.setAttribute("data-ingredient-id", 2);
  ingredientTag.addEventListener("click", removeIngredient);
  tagIngredient.appendChild(ingredientTag);
  reponse.appendChild(tagIngredient);
  console.log("Inner text : " + ingredientItem.innerText);
  searchingText += "," + ingredientItem.innerText;

}


function mouvUstensils(event){
  var ustensilsItem = event.target;
  const reponse = document.getElementById("reponse-dropdown");
  console.log(ustensilsItem);
  var tagUstensils = document.createElement("ul");
  var ustensilTag = ustensilsItem;
  ustensilTag.setAttribute("data-ustensil-id", 2);
  ustensilTag.addEventListener("click", removeUstensil);
  tagUstensils.appendChild(ustensilTag);
  reponse.appendChild(tagUstensils);
  
}

function mouvAppliances(event){
  var appliancesItem = event.target;
  const reponse = document.getElementById("reponse-dropdown");
  console.log(appliancesItem);
  var tagAppliances = document.createElement("ul");
  var applianceTag = appliancesItem;
  applianceTag.setAttribute("data-appliance-id", 2);
  applianceTag.addEventListener("click", removeAppliance);
  tagAppliances.appendChild(applianceTag);
  reponse.appendChild(tagAppliances);

}

function removeIngredient(event){
  var inputIngredient = event.target;
  var ingredient= document.getElementById("ingredientsDropdownMenu");
  inputIngredient.parentNode.removeChild(inputIngredient); // effacement de l'element
  ingredient.appendChild(inputIngredient);
}

function removeUstensil(event){
  var inputUstensils = event.target;
  var ustensils = document.getElementById("ustensilsDropdownMenu");
  inputUstensils.parentNode.removeChild(inputUstensils);
  ustensils.appendChild(inputUstensils);
}

function removeAppliance(event){
  var inputAppliances = event.target;
  var appliances = document.getElementById("appliancesDropdownMenu");
  inputAppliances.parentNode.removeChild(inputAppliances);
  appliances.appendChild(appliances);
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
  let showRecipes = e.target.value; 
  searchRecipes(showRecipes);
}
function searchRecipes(searchingText){
  if(searchingText.length > 2)
  {
    //if (searchingText !=text){

    //}else{
     searchingText = text;
    //}
    if (showRecipes != recipes){
      filteredRecipes = showRecipes.filter(r => !r.name.includes(searchingText) && 
                        !r.appliance.includes(searchingText) &&
                        r.ustensils.filter(u => u.includes(searchingText)).length == 0 &&
                        r.ingredients.filter(i => i.ingredient.includes(searchingText)).length == 0);



      filteredRecipes.map(r =>
      {
        document.getElementById(r.id).style.display = "none"
      })
      showRecipes =filteredRecipes;
    }else{
      filteredRecipes = recipes.filter(r => !r.name.includes(searchingText) && 
                        !r.appliance.includes(searchingText) &&
                        r.ustensils.filter(u => u.includes(searchingText)).length == 0 &&
                        r.ingredients.filter(i => i.ingredient.includes(searchingText)).length == 0);
      filteredRecipes.map(r =>
      {
        document.getElementById(r.id).style.display = "none"
      })
      showRecipes =filteredRecipes;
    }
  }
  else{
    recipes.map(r =>
      {
        document.getElementById(r.id).style.display = "block"
      })
  } 
}


/*const liIngredients =document.getElementById("ingredients");
liIngredients.addEventListener("click",function(){
  const input= liIngredients.value;
  console.log("test1"+ input);

});*/
//var tableIngredientTag=[];


 
var distinctIngredients = getDistinctIngredients();
var distinctUstensils = getDistinctUstensils();
var distinctAppliance = getDistinctAppliances();


displayDistinctItemsDropdown(distinctIngredients, "ingredientsDropdownMenu");
displayDistinctItemsDropdown2(distinctUstensils, "ustensilsDropdownMenu");
displayDistinctItemsDropdown3(distinctAppliance, "appareilsDropdownMenu");
displayAllItems(recipes);