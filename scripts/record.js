document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameters
    function getUrlParams() {
        var params = {};
        var queryString = window.location.search.substring(1);
        var pairs = queryString.split("&");
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        return params;
    }

    // Get the URL parameters
    var urlParams = getUrlParams();

    // Extract form data and insert into placeholders
    var username = urlParams["username"];
    var email = urlParams["email1"];
    var rating = urlParams["rating"];

    // Select elements in the confirmation section
    var usernameElement = document.querySelector("#confirmation strong:nth-of-type(1)");
    var emailElement = document.querySelector("#confirmation strong:nth-of-type(2)");
    var ratingElement = document.querySelector("#confirmation strong:nth-of-type(3)");

    // Update the text content of the elements with the extracted form data
    usernameElement.textContent = username;
    emailElement.textContent = email;
    ratingElement.textContent = rating;
});