
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
        ticket_price: 20.00, //the price of a single ticket for this movie
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
        ticket_price: 20.00, //the price of a single ticket for this movie
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
        ticket_price: 20.00, //the price of a single ticket for this movie
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
        ticket_price: 27.500, //the price of a single ticket for this movie
        tickets_in_cart: 0 //the number of tickets that have been booked for this mc
    },
]

window.addEventListener("load",function(){
    for (let index=0;index<4;index++){
        document.getElementById("Cinema"+index+"head").innerHTML="Cinema "+movies[index]['cinema_number']; //concat the string to dynamically insert the content
        document.getElementById("Cinema"+index+"title").innerHTML=movies[index]['title']; //concat the string to dynamically insert the content
        document.getElementById("Cinema"+index+"d").innerHTML=movies[index]['description']; //concat the string to dynamically insert the content
        document.getElementById("cinema"+index+"img").src=movies[index]['poster_url'] ; //concat the image string tp display the image
        document.getElementById("Cinema"+index+"p").innerHTML="Ticket Price: R"+(movies[index]['ticket_price']).toFixed(2) ; //concat the image string tp display the image        
    }
    document.getElementById("cartnumber").innerHTML = " "+localStorage.numberInCart; //display the number of items in the cart from local storage
    //document.getElementById("cartnumber").innerHTML="1"; test to add the items to the cart
});

function btnmodal(id){
    document.getElementById("modaltitle").innerHTML=movies[id]['title'];
    document.getElementById("mtitle").innerHTML=movies[id]['title'];
    document.getElementById("mdirector").innerHTML=movies[id]['director'];
    document.getElementById("mryear").innerHTML=movies[id]['release_year'];
    document.getElementById("mrun").innerHTML=movies[id]['runtime'];
}


function btnbook(id){
    //increment the cart number
      if (localStorage.numberInCart){
        localStorage.setItem('numberInCart',Number(localStorage.numberInCart)+1)
      } else {
          localStorage.numberInCart=1;
      }

      //get the cost and store in the key
      if (localStorage.totalCost) {
        localStorage.setItem('totalCost',Number(localStorage.totalCost)+movies[id]['ticket_price']);
      } else {
        localStorage.totalCost = Number(movies[id]['ticket_price']);
      }

      //check if localstorage is empty
      if ((localStorage.getItem('moviesinCart'))===null){
        movies[id]['tickets_in_cart']+=1;
        localStorage.setItem('moviesinCart',JSON.stringify(movies));
      } else{
           // movies[id]['tickets_in_cart']+=1;
            var retrievelocal = localStorage.getItem('moviesinCart');
            var movies2 = JSON.parse(retrievelocal);
            movies2[id]['tickets_in_cart']+=1;
            localStorage.setItem('moviesinCart',JSON.stringify(movies2));
      }
       
        //check this logic as when coming back to the page it resets doesn't append
      document.getElementById("cartnumber").innerHTML = " "+localStorage.numberInCart; //display the number of items in the cart from local storage
    //persist the local data with a key/value
    //key = name of data to persist and value of what is stored under that name.
    //alert(movies[id]['tickets_in_cart']); used to check the cart is updating
    //also need to persist the number of tickets for each movie in the cart, how the objecct is persisted
      //find out how to add multiple objects to local storage and update local storage
}
