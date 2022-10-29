
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




$(".searchClose").click(function(){

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

$(document).ready(function () {
    
    $(".loadingScreen").fadeOut(1000)


});




$("#byName").keydown(function () { 

    let searchByName = document.querySelector("#byName").value


async function getSearchMeals()
{

    let searchHasalah = "" ;


    let searchApi =await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName}`)

    searchApi =await searchApi.json()

    searchMeals =await searchApi.meals


    for ( let i=0 ; i<searchMeals.length ; i++ )
    {


        searchHasalah += 
                    ` <div class="overflow-hidden col-md-6 col-lg-3  my-3 shadow position-relative everyMeal">
                            <div class="border rounded">
                                <img class="img-fluid" src="${searchMeals[i].strMealThumb}" alt="">
                            </div>

                            <div class="text-center hover border rounded fw-bold fs-3">
                                <p > ${searchMeals[i].strMeal}</p>
                            </div>  
                     </div>
                  `

    document.querySelector(".searchMeals").innerHTML = searchHasalah
    }    
}

getSearchMeals()
    
});





$("#byLetter").keydown(function () { 

    let searchByLetter = document.querySelector("#byLetter").value


async function getLetterMeals()
{

    let searchLetterHasalah = "" ;


    let searchLetterApi =await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByLetter}`)
    

    searchLetterApi =await searchLetterApi.json()

    searchLetMeals =await searchLetterApi.meals


    for ( let i=0 ; i<searchLetMeals.length ; i++ )
    {


        searchLetterHasalah += 
                    ` <div class="overflow-hidden col-md-6 col-lg-3  my-3 shadow position-relative everyMeal ">
                            <div class="border rounded">
                                <img class="img-fluid" src="${searchLetMeals[i].strMealThumb}" alt="">
                            </div>

                            <div class="text-center hover border rounded fw-bold fs-3">
                                <p > ${searchLetMeals[i].strMeal}</p>
                            </div>  
                     </div>
                  `

    document.querySelector(".searchMeals").innerHTML = searchLetterHasalah
    }    
}

getLetterMeals()
    
});


