function DisplayBestSellers(){
    let count = 0;
    for (book in bookData)
    {
        if (bookData[book].bestseller == true && count <= 4)
        {
            document.getElementById("bestseller_main").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
            count = count + 1;
        }
        
    }
    
}

function DisplayFavorites(){
    let count = 0;
    for (book in bookData)
    {
        if (bookData[book].favorite == true && count <= 4)
        {
            document.getElementById("favorites_main").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
            count = count + 1;
        }
    
    }
}

function DisplayArrivals(){
    let count = 0;
    for (book in bookData)
    {
        if (bookData[book].newArrival == true && count <= 4)
        {
            document.getElementById("arrivals_main").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
            count = count + 1;
        }
    
    }
}



window.addEventListener("load", function(){
    let images = document.querySelectorAll("img");
    for (let i = 0; i < bookData.length; i++)
    {
        for(let j = 0; j < images.length; j++)
            if (bookData[i].book.title == images[j].alt)
            images[j].addEventListener("click", function(){
                window.location.href = `Book.html?id=${i}`
            });
    }
});


function BookInfo(){
    let urlParams = new URLSearchParams(window.location.search);
    let index = urlParams.get('id');
    document.getElementById("book").innerHTML += `<img src="${bookData[index].book.choice.softcover.image}" alt="${bookData[index].book.title}">`;
    


}
