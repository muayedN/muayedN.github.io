window.onload = function() {
    "use strict";
    document.getElementById('decorate').onclick = function() {
        setInterval(
            function() {
                let x = parseInt(document.getElementById('textArea').style.fontSize);
                if (!x)
                    document.getElementById('textArea').style.fontSize = "2em";
                else
                    document.getElementById('textArea').style.fontSize = (2 + x) + 'em';
            }, 500);
    };
    document.getElementById("checkbox").onchange = function() {
        document.getElementById('textArea').className = document.getElementById('textArea').className ? "" : "bling";
        document.getElementById('body').className = document.getElementById('body').className ? "" : "bling";

    };
};