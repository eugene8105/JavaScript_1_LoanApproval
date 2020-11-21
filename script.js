
$(document).ready(function () {
    // add event handlers

    // $("#tpipLength").click(showPopup);

    var myRules = {

        weight: {
            required: true,
            min: 88,
            max: 353,
            digits: true
        },

        height: {
            required: true,
            min: 59,
            max: 79,
            digits: true
        }

    };

    var myMessages = {
        weight: {
            required: "Need your weight.",
            min: "Minimum is 88.",
            max: "Maximum is 353.",
            digits: "Must be a whole number"
        },

        height: {
            equired: "Need your weight.",
            min: "Minimum is 59.",
            max: "Maximum is 79.",
            digits: "Must be a whole number"
        }
    };

    function loanApprov() {
        // get number of beer person had
        var input1 = parseInt($("#Input1").val());

        // get number of wine person had
        var input2 = parseInt($("#Input2").val());

        // calculation
        // Formula: 703 x weight (lbs) / [height (in)]2

        var approved = false;

        // output on the screen
        $("#message").text(`Your BMI is ${approved}`);

        // $("p.output").show();

    }

    $("form").validate({
        submitHandler: loanApprov,
        rules: myRules,
        message: myMessages
    })
}
)

