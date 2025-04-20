if (localStorage.getItem('bookData')) {
    bookData = JSON.parse(localStorage.getItem('bookData'));
}


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
function grabBookId(){
    let urlParams = new URLSearchParams(window.location.search);
    let index = urlParams.get('id');
    return index;
}

function BookInfo(){
    let index = grabBookId();
    let bookHTML = `
     <figure>
    <img src="${bookData[index].book.choice.softcover.image}" alt="${bookData[index].book.title}">
    </figure>`;
    document.getElementById("book").innerHTML += bookHTML;
    document.getElementById("synopsis").innerHTML += `<p>${bookData[index].book.description}</p>`;
    /*document.getElementById("soft_price").innerHTML += bookData[index].book.choice.softcover.price;
    document.getElementById("hard_price").innerHTML += bookData[index].book.choice.hardcover.price;*/
    document.getElementById("author").innerHTML += bookData[index].book.author;
    document.getElementById("title").innerHTML += bookData[index].book.title;
    document.getElementById("genre").innerHTML += bookData[index].book.genre;
    document.getElementById("add_to_cart").innerHTML = "";
    if(bookData[index].inCart==true)
        document.getElementById("add_to_cart").innerHTML += "Remove from Cart";
    else
        document.getElementById("add_to_cart").innerHTML += "Add to Cart";

}  

function addToCart(){
    document.getElementById("add_to_cart").addEventListener("click", function(){
    let index = grabBookId();
    bookData[index].inCart = !bookData[index].inCart;
    document.getElementById("add_to_cart").innerHTML = "";
    if(bookData[index].inCart==true)
        document.getElementById("add_to_cart").innerHTML += "Remove from Cart";
    else
        document.getElementById("add_to_cart").innerHTML += "Add to Cart";
    
    localStorage.setItem('bookData', JSON.stringify(bookData));

   


});
}

window.addEventListener("load", function(){
    if (document.getElementById("soft") && document.getElementById("hard")){
    document.getElementById("soft").addEventListener("change", updatePrice);
    document.getElementById("hard").addEventListener("change", updatePrice);
    }
})

function updatePrice(){
    let index = grabBookId();
    if (document.getElementById("soft").checked)
        document.getElementById("price").textContent = "Price: $" + bookData[index].book.choice.softcover.price;
    else if (document.getElementById("hard").checked)
        document.getElementById("price").textContent = "Price: $" + bookData[index].book.choice.hardcover.price;
}