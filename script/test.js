const search = document.querySelector(".navbar");
const input = search.querySelector("input");
//const suggBox = search.querySelector(".autocom-box"); // relier les blocs

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
            
            return data.toLowerCase().startsWith(userData.toLowerCase());
        
            
        });
        emptyArray2=tableauIngredient.concat(tableauUstensil).concat(tableauAppareil).filter((data)=>{
            
            return data.toLowerCase().endsWith(userData.toLowerCase());
        
            
        });
        emptyArray= emptyArray.map((data)=>{
           return data= data;
        });
        emptyArray2= emptyArray2.map((data)=>{
            return data= data;
        });
        console.log(emptyArray.concat(emptyArray2));
        //console.log(emptyArray2);
    }
    //else{
        //show(emptyArray);
        
    //}
}

/*function show(list){
    var listData;
    if(!list.length)
    {

    }
    else
    {
        listData =list.join('');
    }
    //suggBox.innerHTML= listData;
}*/