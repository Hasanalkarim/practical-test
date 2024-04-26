const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());




function connect() {

    var searchTerm = document.getElementById("searchBox").value ;

    
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`; 

    fetch (url)
    .then (res=> res.json() )
    .then( data => show(data.meals))
}




function connectall() {

    var searchTerm = document.getElementById("searchBox").value ;

    document.getElementById("searchBox").value = ""; 
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`; 

    fetch (url)
    .then (res=> res.json() )
    .then( data => showall(data.meals))
}




function show (data) {
 
 
 var oldContent = document.getElementById("card-items");
    oldContent.textContent = ""; 

 for (var i=0; i<5; i++){



  var newdiv= document.createElement("div");
    
  newdiv.innerHTML = 
  
                                `  
                                
                                <div class="card">
                                <div class="card__image-container">
                                    <img src="${data[i].strMealThumb}">
                                </div>
                                <div class="card__content">
                                    <p class="card__title text--medium"> ${data[i].strMeal}</p>
                                    <div class="card__info">
                                        <p class="text--medium">${data[i].strInstructions}</p>
                                        <p class="card__price text--medium">Free</p>
                                    </div>
                                </div>
                                </div>

                                
                                `; 
    
    oldContent.appendChild(newdiv); 
    
 }

 
 

}



function showall (data) {
 
 
    var oldContent = document.getElementById("card-items");
       oldContent.textContent = ""; 
   
    for (var i=0; i<data.length; i++){
   
   
   
     var newdiv= document.createElement("div");
       
     newdiv.innerHTML = 
     
                                   `  
                                   
                                   <div class="card">
                                   <div class="card__image-container">
                                       <img src="${data[i].strMealThumb}">
                                   </div>
                                   <div class="card__content">
                                       <p class="card__title text--medium"> ${data[i].strMeal}</p>
                                       <div class="card__info">
                                           <p class="text--medium">${data[i].strInstructions}</p>
                                           <p class="card__price text--medium">Free</p>
                                       </div>
                                   </div>
                                   </div>
   
                                   
                                   `; 
       
       oldContent.appendChild(newdiv); 
       
    }
   
    
    
   
   }
   

