$(document).ready(function() {
    var sequence = [];
    var userSequence = [];
    var colors = ["green", "red", "yellow", "blue"];
    var level = 0;

    function nextSequence() {
        userSequence = [];
        level++;
        $("#start").text("Level " + level);
        var randomColor = colors[Math.floor(Math.random() * 4)];
        sequence.push(randomColor);
        playSequence();
    }

    function playSequence() {
        var i = 0;
        var interval = setInterval(function() {
            $("#" + sequence[i]).fadeOut(100).fadeIn(100);
            i++;
            if (i >= sequence.length) {
                clearInterval(interval);
            }
        }, 600);
    }

    function checkSequence(currentLevel) {
        if (userSequence[currentLevel] === sequence[currentLevel]) {
            if (userSequence.length === sequence.length) {
                setTimeout(nextSequence, 1000);
            }
        } else {
            $("#start").text("Game Over! Start Again");
            sequence = [];
            level = 0;
        }
    }

    $(".color-button").click(function() {
        var userChosenColor = $(this).attr("id");
        userSequence.push(userChosenColor);
        $("#" + userChosenColor).fadeOut(100).fadeIn(100);
        checkSequence(userSequence.length - 1);
    });

    $("#start").click(function() {
        if (level === 0) {
            nextSequence();
        }
    });

    // Export functions and variables for testing
    module.exports = {
        nextSequence,
        checkSequence,
        sequence,
        userSequence,
        level
    };
});