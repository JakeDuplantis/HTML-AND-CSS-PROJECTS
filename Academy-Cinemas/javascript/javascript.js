//Initialize popover

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc +"'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

//Initialize Toast

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
})

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    //these variables capture data of each input field
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value ;
    //concatenates the strings and variable values
    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //Display toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

//when buyTickets button is pressed displaySelectedMovieOptions() is called
function buyTickets() {
    displaySelectedMovieOptions();
}

//JQUERY
//shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function () {
    //When the webpage is scrolled down from the top by 50px this
    //if statement will trigger
    if ($(document).scrollTop() > 50) {
        //Once the 50px requirement has been met add the 
        //nav-shrink class selector to the same HTML element
        //that had the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the mobile drop menu
        //to accomodate the new hieght decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage has not been scrolled down or
        //is back at the top the nav-shrink class selector
        //is removed from the HTML element with the nav
        //class selector
        $("nav").removeClass("nav-shrink");
        //The margin for the drop down menu is now returned to it's original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

//close mobile menu when a navigation link is clicked
$(document).ready(function () {
    //on click when an element contains just the nav-link class and not the dropdown-toggle and then
    //also close when an element with the class .dropdown-item (each movie link) has been clickeded
    $(".navbar-nav").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function() {
        //collapse the navbar when a link or dropdown tiem is clicked
        $(".navbar-collapse").collapse('hide');
    });
});