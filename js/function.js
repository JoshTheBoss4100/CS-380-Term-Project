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