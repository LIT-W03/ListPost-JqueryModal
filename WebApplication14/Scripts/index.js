$(function() {
    var number = 1;
    $("#add-row").on('click', function () {
        var firstNameTextBox = getInput('people[' + number + '].firstName', "First Name");
        var lastNameTextBox = getInput('people[' + number + '].lastName', "Last Name");
        var ageTextBox = getInput('people[' + number + '].age', "Age");
        var row = $("<tr><td>" + firstNameTextBox + "</td><td>" + lastNameTextBox + "</td><td>"
            + ageTextBox + "</td></tr>");
        $("table").append(row);
        number++;
    });

    function getInput(name, placeholder) {
        return "<input type='text' placeholder='" + placeholder + "' name='" +
            name + "' class='form-control' />";
    }
});