const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 4, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg",rating:10, comment: "Very Yummy"},
    { id: 5, name: "Nirvana Ramen", restaurant: "Ramen-ya", image: "images/nirvana.jpg",rating:10, comment: "Very Yummy"},
    { id: 6, name: "Shoyu Ramen", restaurant: "Ramen-ya", image: "images/shoyu.jpg",rating:10, comment: "Very Yummy"}
 ];
//so this fuction is for showing the selected ramen and display its info(like the clicked ramen image)
function showRamenMenu() {
    var ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; 

    for (var i = 0; i < ramens.length; i++) {
        var ramen = ramens[i];

        var img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;

        img.addEventListener("click", (function (selectedRamen) {
            return function () {
                showRamenDetails(selectedRamen);
            };
        })(ramen));

        ramenMenu.appendChild(img);
    }
}

// now this function is used to display all the details of the selected ramen
function showRamenDetails(ramen) {
    document.getElementById("ramen-img").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").querySelector("span").textContent = ramen.rating;
    document.getElementById("ramen-comment").querySelector("span").textContent = ramen.comment;
}

// this function is used for adding new Ramen to the ramens array as a new object 
function addNewRamen() {
    var form = document.getElementById("new-ramen");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var ramenName = document.getElementById("name").value;
        var ramenRestaurant = document.getElementById("restaurant").value;
        var ramenImage = document.getElementById("image").value;
        var ramenRating = document.getElementById("rating").value;
        var ramenComment = document.getElementById("comment").value;

  
        var newRamen = {
            id: ramens.length + 1,
            name: ramenName,
            restaurant: ramenRestaurant,
            image: ramenImage,
            rating: ramenRating,
            comment: ramenComment
        };

   
        ramens.push(newRamen);

        showRamenMenu();

 
        form.reset();
    });
}

//function for starting everything at default 
function startApp() {
    showRamenMenu();
    addNewRamen();
    showRamenDetails(ramens[0]); 
}


document.addEventListener("DOMContentLoaded", startApp);