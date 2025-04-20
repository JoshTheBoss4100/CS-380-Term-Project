const bookData = [{
        book: {
            author:"Lynette Noni",
             title: "Arkanae",
             genre: "Fantasy",
            choice:{
                softcover:{ 
                    image: "bookImages/arkanaesc.jpg",
                    price: "12.99"
                },
                hardcover: {
                    image: "bookImages/arkanaehc.jpg",
                    price: "18.99"
                }
            }
        },
        favorite: true,
        bestseller: false,
        newArrival: false
    },
{
    book: {
        author:"Lynette Noni",
         title: "Raelia",
         genre: "Fantasy",
         choice:{
            softcover:{ 
                image: "bookImages/Raeliasc.jpg",
                price: "12.99"
            },
            hardcover: {
                image: "bookImages/raeliahc.jpeg",
                price: "18.99"
            }
        }
    },
    favorite: true,
    bestseller: false,
    newArrival: false
},
{
    book: {
        author:"Lynette Noni",
         title: "Draekora",
         genre: "Fantasy",
         choice:{
            softcover:{ 
                image: "bookImages/Draekorasc.jpg",
                price: "12.99"
            },
            hardcover: {
                image: "bookImages/Draekorasc.jpg",
                price: "18.99"
            }
        }
    },
    favorite: true,
    bestseller: false,
    newArrival: false
},
{
    book: {
        author:"Lynette Noni",
         title: "Graevale",
         genre: "Fantasy",
         choice:{
            softcover:{ 
                image: "bookImages/Graevalesc.jpg",
                price: "12.99"
            },
            hardcover: {
                image: "bookImages/Graevalesc.jpg",
                price: "18.99"
            }
        }
    },
    favorite: true,
    bestseller: false,
    newArrival: false
},
{
    book: {
        author:"Lynette Noni",
         title: "Vardaesia",
         genre: "Fantasy",
         choice:{
            softcover:{ 
                image: "bookImages/Vardaesiasc.jpg",
                price: "12.99"
            },
            hardcover: {
                image: "bookImages/Vardaesiasc.jpg",
                price: "18.99"
            }
        }
    },
    favorite: true,
    bestseller: false,
    newArrival: false
},
{
    book: {
        author:"Rebecca Yarros",
         title: "Fourth Wing",
         genre: "Fantasy",
         choice:{
            softcover:{ 
                image: "bookImages/Fourthwingsc.jpeg",
                price: "15.99"
            },
            hardcover: {
                image: "bookImages/Fourthwinghc.jpg",
                price: "19.99"
            }
        }
    },
    favorite: true,
    bestseller: true,
    newArrival: false
},
{
    book: {
        author:"Rebecca Yarros",
         title: "Iron Flame",
         genre: "Fantasy",
         choice:{
            softcover:{ 
                image: "bookImages/Ironflamesc.jpg",
                price: "15.99"
            },
            hardcover: {
                image: "bookImages/Ironflamehc.jpg",
                price: "19.99"
            }
        }
    },
    favorite: false,
    bestseller: true,
    newArrival: false
},
{
    book: {
        author:"Rebecca Yarros",
         title: "Onyx Storm",
         genre: "Fantasy",
         choice:{
            softcover:{ 
                image: "bookImages/Onyxstormsc.jpg",
                price: "18.99"
            },
            hardcover: {
                image: "bookImages/Onyxstormhc.jpg",
                price: "24.99"
            }
        }
    },
    favorite: false,
    bestseller: true,
    newArrival: true
},
{
    book: {
        author:"Markus Zusak",
         title: "The Book Theif",
         genre: "Historical Fiction",
         choice:{
            softcover:{ 
                image: "bookImages/Booktheifsc.jpg",
                price: "11.99"
            },
            hardcover: {
                image: "bookImages/Booktheifsc.jpg",
                price: "15.99"
            }
        }
    },
    favorite: true,
    bestseller: false,
    newArrival: false
},
{
    book: {
        author:"Kristin Hannah",
         title: "The Nightingale",
         genre: "Historical Fiction",
         choice:{
            softcover:{ 
                image: "bookImages/Nightingalesc.jpg",
                price: "16.99"
            },
            hardcover: {
                image: "bookImages/Nightingalehc.jpg",
                price: "22.99"
            }
        }
    },
    favorite: false,
    bestseller: false,
    newArrival: false
},
{
    book: {
        author:"Anthony Doerr",
         title: "All The Light We Cannot See",
         genre: "Historical Fiction",
         choice:{
            softcover:{ 
                image: "bookImages/Lightcannotseesc.jpg",
                price: "15.99"
            },
            hardcover: {
                image: "bookImages/Lightcannotseehc.jpeg",
                price: "19.99"
            }
        }
    },
    favorite: false,
    bestseller: false,
    newArrival: false
},
{
    book: {
        author:"Madeline Miller",
         title: "The Song of Achilles",
         genre: "Historical Fiction",
         choice:{
            softcover:{ 
                image: "bookImages/Achillessc.jpg",
                price: "12.99"
            },
            hardcover: {
                image: "bookImages/Achilleshc.jpeg",
                price: "18.99"
            }
        }
    },
    favorite: false,
    bestseller: true,
    newArrival: false
},
{
    book: {
        author:"Colleen Hoover",
         title: "It Ends With Us",
         genre: "Romance",
         choice:{
            softcover:{ 
                image: "bookImages/Itendswithussc.jpg",
                price: "14.99"
            },
            hardcover: {
                image: "bookImages/Itendswithussc.jpg",
                price: "21.99"
            }
        }
    },
    favorite: false,
    bestseller: true,
    newArrival: false
},
{
    book: {
        author:"Abby Jimenez",
         title: "Say You'll Remember Me",
         genre: "Romance",
         choice:{
            softcover:{ 
                image: "bookImages/rememberMesc.jpg",
                price: "18.99"
            },
            hardcover: {
                image: "bookImages/rememberMesc.jpg",
                price: "21.99"
            }
        }
    },
    favorite: false,
    bestseller: false,
    newArrival: true
},
{
    book: {
        author:"Alice Feeney",
         title: "Beautiful Ugly",
         genre: "Mystery",
         choice:{
            softcover:{ 
                image: "bookImages/beautifuluglysc.jpg",
                price: "16.99"
            },
            hardcover: {
                image: "bookImages/beautifuluglysc.jpg",
                price: "21.99"
            }
        }
    },
    favorite: false,
    bestseller: false,
    newArrival: true
},
{
    book: {
        author:"Alex Michaelides",
         title: "The Silent Patient",
         genre: "Mystery",
         choice:{
            softcover:{ 
                image: "bookImages/silentpatient.jpg",
                price: "11.99"
            },
            hardcover: {
                image: "bookImages/silentpatient.jpg",
                price: "19.99"
            }
        }
    },
    favorite: true,
    bestseller: true,
    newArrival: false
},
{
    book: {
        author:"Natasha Preston",
            title: "The Party",
            genre: "Mystery",
            choice:{
                softcover:{ 
                    image: "bookImages/theparty.jpg",
                    price: "18.99"
                },
                hardcover: {
                    image: "bookImages/theparty.jpg",
                    price: "21.99"
                }
            }
        },
    favorite: false,
    bestseller: false,
    newArrival: true
},
{
    book: {
        author:"Karen M. McManus",
            title: "One Of Us Is Lying",
            genre: "Mystery",
            choice:{
                softcover:{ 
                    image: "bookImages/oneofusislying.jpg",
                    price: "15.99"
                },
                hardcover: {
                    image: "bookImages/oneofusislying.jpg",
                    price: "18.99"
                }
            }
    },
    favorite: false,
    bestseller: true,
    newArrival: false
},
{
    book: {
        author:"Emily Henry",
            title: "Beach Read",
            genre: "Romance",
            choice:{
                softcover:{ 
                    image: "bookImages/beachread.jpg",
                    price: "18.99"
                },
                hardcover: {
                    image: "bookImages/beachread.jpg",
                    price: "21.99"
                }
            }
        },
    favorite: false,
    bestseller: true,
    newArrival: false
},
{
    book: {
        author:"Mia Sheridan",
            title: "Archer's Voice",
            genre: "Romance",
            choice:{
                softcover:{ 
                    image: "bookImages/archersvoice.jpg",
                    price: "12.99"
                },
                hardcover: {
                    image: "bookImages/archersvoice.jpg",
                    price: "18.99"
                }
            }
        },
    favorite: false,
    bestseller: true,
    newArrival: false
},
{
    book: {
        author:"Emily Henry",
            title: "Funny Story",
            genre: "Romance",
            choice:{
                softcover:{ 
                    image: "bookImages/funnystory.jpg",
                    price: "18.99"
                },
                hardcover: {
                    image: "bookImages/funnystory.jpg",
                    price: "21.99"
                }
            }
        },
    favorite: false,
    bestseller: true,
    newArrival: true
},
{
    book: {
        author:"Colleen Hoover",
            title: "Ugly Love",
            genre: "Romance",
            choice:{
                softcover:{ 
                    image: "bookImages/uglylove.jpg",
                    price: "15.99"
                },
                hardcover: {
                    image: "bookImages/uglylove.jpg",
                    price: "19.99"
                }
            }
        },
    favorite: false,
    bestseller: false,
    newArrival: false
},
{
    book: {
        author:"Sarah A. Parker",
            title: "When The Moon Hatched",
            genre: "Fantasy",
            choice:{
                softcover:{ 
                    image: "bookImages/whenthemoonhatched.jpg",
                    price: "18.99"
                },
                hardcover: {
                    image: "bookImages/whenthemoonhatched.jpg",
                    price: "23.99"
                }
            }
        },
    favorite: false,
    bestseller: false,
    newArrival: true
},
{
    book: {
        author:"Kristen Ciccarelli",
            title: "Heartless Hunter",
            genre: "Fantasy",
            choice:{
                softcover:{ 
                    image: "bookImages/heartlesshunter.jpg",
                    price: "16.99"
                },
                hardcover: {
                    image: "bookImages/heartlesshunter.jpg",
                    price: "20.99"
                }
            }
        },
    favorite: false,
    bestseller: true,
    newArrival: true
},
{
    book: {
        author:"Elsie Silver",
            title: "Flawless",
            genre: "Romance",
            choice:{
                softcover:{ 
                    image: "bookImages/flawless.jpg",
                    price: "14.99"
                },
                hardcover: {
                    image: "bookImages/flawless.jpg",
                    price: "18.99"
                }
            }
        },
    favorite: true,
    bestseller: false,
    newArrival: false
},
{
    book: {
        author:"Elsie Silver",
            title: "Heartless",
            genre: "Romance",
            choice:{
                softcover:{ 
                    image: "bookImages/heartless.jpg",
                    price: "14.99"
                },
                hardcover: {
                    image: "bookImages/heartless.jpg",
                    price: "18.99"
                }
            }
        },
    favorite: true,
    bestseller: false,
    newArrival: true
},
]