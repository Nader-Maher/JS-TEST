
$("#navOpen").click(function () { 
    
    $(".navPos").animate({left:0} , 500);
    $("#navOpen").addClass("hidenItems");  
    $(".fa-xmark").removeClass("hidenItems");
    $("#searchBtn").animate({top:10} , 1000);
    $("#catBtn").animate({top:30} , 1000);
    $("#areaBtn").animate({top:90} , 1000);
    $("#ingrBtn").animate({top:110} , 1000);
    $("#contact").animate({top:170} , 1000);

});


$(".fa-xmark").click(function () {

    $(".navPos").animate({left:-290} , 500);
    $(".fa-xmark").addClass("hidenItems");  
    $("#navOpen").removeClass("hidenItems");
    $("#searchBtn").animate({top:200} , 200);
    $("#catBtn").animate({top:200} , 200);
    $("#areaBtn").animate({top:200} , 200);
    $("#ingrBtn").animate({top:200} , 200);
    $("#contact").animate({top:200} , 200);
})




$(".areaClose").click(function(){

    location.href = "index.html"
})



$("#catBtn").click(function(){

    location.href = "categories.html"
})

$("#searchBtn").click(function(){

    location.href = "search.html"
})

$("#areaBtn").click(function(){

    location.href = "area.html"
})

$("#ingrBtn").click(function(){

    location.href = "ingredients.html"
})

$("#contact").click(function(){

    location.href = "contact.html"
})



async function getArea()
{

    let CatHasalah = "" ;


    let catApi =await fetch ("https://www.themealdb.com/api/json/v1/1/list.php?a=list")

    catApi =await catApi.json()

    catMeals =await catApi.meals

    console.log(catMeals)

    let catName ;

    for ( let i=0 ; i<catMeals.length ; i++ )
    {


        CatHasalah += 
                    ` <div id="hoverr" class="col-md-6 col-lg-3  my-3 shadow position-relative overflow-hidden everyMeal">
                            <div class=" text-center">
                                <i class="fa-solid fa-city text-danger fa-5x"></i>
                                <p class="text-white fs-3">${catMeals[i].strArea}</p>
                            </div>


                     </div>
                  `

        document.querySelector(".areaMeals").innerHTML = CatHasalah

        catName = catMeals[i].strCategory
    }    
    

}    
getArea()

$(document).ready(function () {
    
    $(".loadingScreen").fadeOut(1000)


});