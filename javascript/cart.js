window.addEventListener("load",refresh());

function refresh(){
    //alert("eventTrriggered")
    if (localStorage.getItem('moviesinCart')===null){
        
    }

    document.getElementById("cartnumber").innerHTML = " "+localStorage.numberInCart; //display the number of items in the cart from local storage
    var table=document.getElementById("movies");

    var retrievelocal = this.localStorage.getItem('moviesinCart');
    var movies2 = JSON.parse(retrievelocal);

    popheaders();

    for (id=0;id<movies2.length;id++){
        if (movies2[id]['tickets_in_cart']!=0){
        var row=table.insertRow(-1);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell0.innerHTML='<button id="movieremove'+id+'" type="button" class="fa fa-minus-square" onclick=movieremove('+id+')></button>'+" "+movies2[id]['title'];
        cell1.innerHTML="R"+Number(movies2[id]['ticket_price']).toFixed(2);
        cell2.innerHTML='<button type="button" class="fa fa-arrow-circle-left" onclick=moviedecr('+id+')></button>'+" "+movies2[id]['tickets_in_cart']+
        '<button type="button" class="fa fa-arrow-circle-right" onclick=movieincr('+id+')></button>';
        cell3.innerHTML="R"+Number(movies2[id]['tickets_in_cart']*movies2[id]['ticket_price']).toFixed(2);
        }
    }
    addtotal();
}

function popheaders(){
    var table = document.getElementById("movies");
    var header = table.createTHead();
     var row = header.insertRow(0);
     var cell0 = row.insertCell(0);
     var cell1 = row.insertCell(1);
     var cell2 = row.insertCell(2);
     var cell3 = row.insertCell(3);
    cell0.innerHTML = "<b>Movie Name</b>";
    cell1.innerHTML = "<b>Unit Price</b>";
    cell2.innerHTML = "<b>Quantity</b>";
    cell3.innerHTML = "<b>Total Cost</b>";
}

function movieremove(id){
    document.getElementById("movies").deleteRow(id+1);
}

function moviedecr(id){ //decrement the number of tickets in the local storage array and update the price.
    //alert("movie decr "+id);
    var retrievelocal = this.localStorage.getItem('moviesinCart');
    var movies2 = JSON.parse(retrievelocal);
    movies2[id]['tickets_in_cart']-=1;
    localStorage.setItem('moviesinCart',JSON.stringify(movies2));
    document.getElementById("movies").innerHTML="";
    refresh();
}
function movieincr(id){
    //alert("movie incr "+id);
    var retrievelocal = this.localStorage.getItem('moviesinCart');
    var movies2 = JSON.parse(retrievelocal);
    movies2[id]['tickets_in_cart']+=1;
    localStorage.setItem('moviesinCart',JSON.stringify(movies2));
    document.getElementById("movies").innerHTML="";
    refresh();
}

// document.getElementById("movieremove0").addEventListener("click",function(){
//     alert("btn0 clicked");
// });

function addtotal(){
    var table=document.getElementById("movies");
    var row=table.insertRow(-1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    cell2.innerHTML="Total: ";
    cell3.innerHTML="R"+Number(this.localStorage.getItem('totalCost')).toFixed(2);
}