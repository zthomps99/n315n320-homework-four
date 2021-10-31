function initListeners() {
    $("#submit").click(function(e) {
        e.preventDefault();
        let firstName = $("#fName").val();
        let lastName = $("#lName").val();
        let email = $("#email").val();
        let location = $("#location").val();
        console.log("inputs " + firstName + ' ' + lastName + ' ' + email + ' ' + location);
    });

    $("#edit").click(function(e) {
        e.preventDefault();

        let userObj = {
            fName: "Zach",
            lName: "Thompson",
            email: "zthomps@iu.edu",
            location: "Indiana"
        };
        console.log(userObj);
        $("#fName").val(userObj.fName);
        $("#lName").val(userObj.lName);
        // console.log("inputs " + firstName + ' ' + lastName);
    });
}

$(document).ready(function () {
    initListeners();
});