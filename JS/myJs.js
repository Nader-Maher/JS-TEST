// new WOW().init();

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




async function getMeals()
{
    let hasalah = "" ;

    let mealData =await fetch ("https://www.themealdb.com/api/json/v1/1/search.php?s=")

    mealData =await mealData.json()

    mealName =await mealData.meals
    

    for ( let i=0 ; i<mealName.length ; i++ )
    {


        hasalah += 
                    ` <div class="col-md-6 col-lg-3 overflow-hidden my-3 shadow position-relative everyMeal">
                            <div class="border rounded">
                                <img class="img-fluid" src="${mealName[i].strMealThumb}" alt="">
                            </div>

                            <div class="text-center hover border rounded fw-bold fs-3">
                                <p class="text-dark"> ${mealName[i].strMeal}</p>
                            </div>  
                     </div>

                     
                  `

        document.querySelector(".displayMeal").innerHTML = hasalah

        $(".everyMeal").click(function(){
            $(".recipe").fadeIn(500)
        })    
    }
    
}

getMeals()



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






$(document).ready(function () {
    
    $(".loadingScreen").fadeOut(1000)


});





