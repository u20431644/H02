let movies = [
    {
        id: 0, //a unique identifier for this movie
        title: "Jaws", //the title of this movie
        director: "Steven Spielberg", //the name of the director of this movie
        runtime: "2 hours 4 minutes", //the runtime of this movie
        release_year: 1975, //the year this movie was released
        description: "When a killer shark unleashes chaos on a beach community off of Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down!", //a description of this movie
        poster_url: "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg", //a URL or file path to an image of the poster for this movi
        cinema_number: 1, //the number of the cinema this movie will be showing in
        ticket_price: 20, //the price of a single ticket for this movie
        tickets_in_cart: 0 //the number of tickets that have been booked for this mc
    },
    {
        id: 1, //a unique identifier for this movie
        title: "Jurassic Park", //the title of this movie
        director: "Steven Spielberg", //the name of the director of this movie
        runtime: "2 hours 7 minutes", //the runtime of this movie
        release_year: 1993, //the year this movie was released
        description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.", //a description of this movie
        poster_url: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg/", //a URL or file path to an image of the poster for this movi
        cinema_number: 2, //the number of the cinema this movie will be showing in
        ticket_price: 20, //the price of a single ticket for this movie
        tickets_in_cart: 0 //the number of tickets that have been booked for this mc
    },
    {
        id: 2, //a unique identifier for this movie
        title: "E.T. the Extra-Terrestrial", //the title of this movie
        director: "Steven Spielberg", //the name of the director of this movie
        runtime: "1 hour 55 minutes", //the runtime of this movie
        release_year: 1975, //the year this movie was released
        description: "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.", //a description of this movie
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", //a URL or file path to an image of the poster for this movi
        cinema_number: 3, //the number of the cinema this movie will be showing in
        ticket_price: 20, //the price of a single ticket for this movie
        tickets_in_cart: 0 //the number of tickets that have been booked for this mc
    },
    {
        id: 3, //a unique identifier for this movie
        title: "Star Wars: Episode I - The Phantom Menace", //the title of this movie
        director: "George Lucas", //the name of the director of this movie
        runtime: "2 hours 16 minutes", //the runtime of this movie
        release_year: 1999, //the year this movie was released
        description: "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.", //a description of this movie
        poster_url: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg", //a URL or file path to an image of the poster for this movi
        cinema_number: 4, //the number of the cinema this movie will be showing in
        ticket_price: 20, //the price of a single ticket for this movie
        tickets_in_cart: 0 //the number of tickets that have been booked for this mc
    },
]

window.addEventListener("load",function(){
    for (let index=0;index<4;index++){
        document.getElementById("Cinema"+index+"head").innerHTML="Cinema "+movies[index]['cinema_number']; //concat the string to dynamically insert the content
        document.getElementById("Cinema"+index+"title").innerHTML=movies[index]['title']; //concat the string to dynamically insert the content
        document.getElementById("Cinema"+index+"d").innerHTML=movies[index]['description']; //concat the string to dynamically insert the content
    }
});