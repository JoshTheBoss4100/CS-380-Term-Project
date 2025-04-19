function DisplayBestSellers(){
    for (book in bookData)
    {
        if (bookData[book].bestseller == true)
        {
            document.getElementById("bestseller_main").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}

function DisplayFavorites(){
    for (book in bookData)
    {
        if (bookData[book].favorite == true)
        {
            document.getElementById("favorites_main").innerHTML += `<img src="${bookData[book].book.choice.softcover.image}" alt="${bookData[book].book.title}">`;
        }
    }
}