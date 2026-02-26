 const textarea = document.getElementById("message");
        const counter = document.getElementById("counter");
        const warning = document.getElementById("warning");

        const maxLength = 200;

        textarea.addEventListener("input", function () {
            let currentLength = textarea.value.length;

            counter.textContent = currentLength + " / " + maxLength + " characters";

            if (currentLength >= maxLength) {
                warning.textContent = "Character limit reached!";
            } else {
                warning.textContent = "";
            }
        });