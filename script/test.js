const search = document.querySelector(".navbar");
const input = search.querySelector("input");
//const suggBox = search.querySelector(".autocom-box");

// L'utilisateur appuie sur n'importe quel touche
input.onkeyup=(e)=>{
   // console.log(e.target.value); //Affiche ce qu'ecrit l'utilisateur
    let userData = e.target.value;
    let emptyArray =[];

    if(userData){
        //concaténation des trois tableaus
        //filtrer la valeur du tableau et le caractère utilisateur  et renvoyer
        //le qui commence par le mot saisi par l'utilisateur
        emptyArray=tableauIngredient.concat(tableauUstensil).concat(tableauAppareil).filter((data)=>{
            
            return data.toLowerCase().startsWith(userData.toLowerCase());
            
        });
        emptyArray= emptyArray.map((data)=>{
           return data= data;
       });
        console.log(emptyArray);
    }
    else{
        show(emptyArray);
        
    }
}

function show(list){
    var listData;
    if(!list.length)
    {

    }
    else
    {
        listData =list.join('');
    }
    //suggBox.innerHTML= listData;
}