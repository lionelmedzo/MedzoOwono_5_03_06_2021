const search = document.querySelector(".navbar");
const input = search.querySelector("input");
const autocom = document.getElementById("ingredient-list")


// L'utilisateur appuie sur n'importe quel touche
input.onkeyup=(e)=>{
   // console.log(e.target.value); //Affiche ce qu'ecrit l'utilisateur
    let userData = e.target.value;
    let emptyArray =[];
    let emptyArray2 =[];

    if(userData){
        //concaténation des trois tableaux
        //filtrer la valeur du tableau et le caractère utilisateur  et renvoyer
        //1er et mot saisi par l'utilisateur
        emptyArray=tableauIngredient.concat(tableauUstensil).concat(tableauAppareil).filter((data)=>{
            
            //return data.toLowerCase().startsWith(userData.toLowerCase());
            var dataTest= data.toLowercase();
            if(dataTest.indexOf(" ")==-1)
            {
                return dataTest.includes(userData.toLowercase());
            }
            else
            {
                var dataArray = dataTest.split(" ");
                for(var i =0; i<dataArray.length -1 ; i++)
                {
                    var dataMot = dataArray[i];
                    if(dataMot.includes(userData.toLowercase()))
                    {
                        return true;
                    }
                }
                return false;
            }
        
            
        });
        
        emptyArray= emptyArray.map((data)=>{
           return data= data;
        });
        
        console.log(emptyArray)
        //console.log(emptyArray2); 
        
            
        
    }
}

/*function insererIngredient(){
    
}*/
