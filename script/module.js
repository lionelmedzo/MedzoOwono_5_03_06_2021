// Creation de 3 tableau de string
function getDistinctIngredients ()  
{

  let toReturn = [];

  for(let recipe of recipes)
  {
    for(let ingredient of recipe.ingredients)
    {
      if(!toReturn.includes(ingredient.ingredient))
      {
        toReturn.push(ingredient.ingredient);
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
      if(!toReturn.includes(ustensil))
      {
        toReturn.push(ustensil);
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
      if(!toReturn.includes(recipe.appliance))
      {
        toReturn.push(recipe.appliance);
      }
  }

  return toReturn;
}


// ----------------------------------------------------------------------------------------
function displayDistinctItemsDropdown (distinctIngredients = [], dropdownName) 
{
  var ingredientsDropdownMenu = document.getElementById(dropdownName);
  
  for(let ingredient of distinctIngredients)
  {
    const ingredientLink = document.createElement("a");
    ingredientLink.id = ingredient;
    ingredientLink.text = ingredient;
    ingredientLink.href = "#";
    ingredientsDropdownMenu.appendChild(ingredientLink);
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
                 ${recipe.ingredients.map(i => { return (`<li><b>${i.ingredient}</b>: ${i.quantity}${i.unit} </li>`);}).join('')}
              </ul>
          </div>
      
          <div class="description-action">
              <h6 class="time"><i class="far fa-clock"></i> ${recipe.time}min</h6>
              <span>${recipe.description}
              </span>
          </div>
      </div>`
  }
}
const search = document.querySelector(".navbar");
const input = search.querySelector("input");

input.onkeyup=(e)=>{
  let userData = e.target.value; 
 if(userData.length > 2)
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
}*/
/* let filteredFriends = users.filter(user => {
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

//displayDistinctItemsDropdown(distinctIngredients, "ingredientsDropdownMenu");
//(distinctUstensils, "appareilsDropdownMenu");
//displayDistinctItemsDropdown(distinctAppliance, "ustensilsDropdownMenu");
displayAllItems(recipes)



/*let tableauIngredient=[];
let recupIngredient=[];
listeIngredient(tableauIngredient);
console.log("Liste d'ingredients : ");
console.log(tableauIngredient);





function listeIngredient(X){
    for (var i = 0; i < recipes.length ; i++)
    {
       recupIngredient = recipes[i].ingredients;
       
        for (var j = 0 ; j < recupIngredient.length; j++)
        {
            let ingredient = recupIngredient[j].ingredient.toLowerCase();
            //console.log(ingredient); // chaine de caractere, exemple  "l" "a" "i" "t"
            if (X.includes(ingredient)== false) // condition si la valeur n'est pas dans le tableau 
            {
                X.push(ingredient);             // ajout valeur dans le tableau
            }    
        }         
    }   

}
let tableauAppareil=[];
listeAppareil(tableauAppareil);
console.log("Liste d'appareil : ");
console.log(tableauAppareil);

function listeAppareil(X){
    for (var i = 0; i < recipes.length ; i++)
    {
        let recupAppareil= recipes[i].appliance.toLowerCase();
	    for  (var j = 0; j < recupAppareil.length ; j++)
	    {
            
            if (X.includes(recupAppareil)==false)
            {
            X.push(recupAppareil);
            }
        }
        
    }
}



let tableauUstensil=[];
listeUstensil(tableauUstensil);
console.log("Liste d'ustensils : ");
console.log(tableauUstensil);

function listeUstensil(X){
    for (var i = 0; i < recipes.length ; i++)
    {
        let recupUstensil= recipes[i].ustensils;
        for  (var j = 0; j < recupUstensil.length ; j++)
        {
            let ustensil =  recupUstensil[j].toLowerCase();
            if (X.includes(ustensil)==false)
            {
                X.push(ustensil);
            }
        }
        
    }
}

let tableauDescription=[];

descriptionRecette(tableauDescription);
console.log("description : ");
console.log(tableauDescription);

function descriptionRecette(X){
    for (var i = 0; i < recipes.length ; i++)
    {
        let recupDescription=recipes[i].description;
        for  (var j = 0; j < recupDescription.length ; j++)
	    {
            if(X.includes(recupDescription)==false){
                X.push(recupDescription);
            }
        }
        
    }
}
/*function  decoupage(){
    for(var i= 0 ; i < recupDescription; i++){
        let decoupDescription = recupDescription[i].split();
        if 
    }
}*/



//document.getElementById('search').value = tableauUstensil;
/*const dropIngredient = document.getElementById("menu");
const dropAppareil = document.getElementById("menu2");
const dropustensil = document.getElementById("menu3");


dropIngredient.innerHTML=tableauIngredient;
dropAppareil.innerHTML=tableauAppareil;
dropustensil.innerHTML=tableauUstensil;*/





    
    

