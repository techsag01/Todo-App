document.getElementById("task").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && document.getElementById("task").value !== "") {
        let text = document.getElementById("task").value
        if (text !== "") {
            let main = document.getElementById("add")
            let newdiv = document.createElement("div")
            newdiv.textContent = text;
            main.appendChild(newdiv);
            newdiv.ondblclick = () => {
                main.removeChild(newdiv);
            };
            main.scrollTop = main.scrollHeight;
            document.getElementById("task").value = "";





            // Add a container for the checkbox
            const checkboxContainer = document.createElement("div");
            checkboxContainer.className = "checkbox-container";

            // Create the checkbox input
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `checkbox-${Date.now()}`; // Unique ID for each checkbox
            let checkid = checkbox.id;
            // Create the label for the checkbox
            const label = document.createElement("label");
            label.htmlFor = checkbox.id;

            // Append checkbox and label to the container
            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(label);

            // Append the checkbox container to the new div
            newdiv.appendChild(checkboxContainer);


            
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    newdiv.style.textDecoration = "line-through";
                }
                else {
                    newdiv.style.textDecoration = "none";
                }
            })




            let timespan = document.createElement("span")
            let time = new Date();
            let hour = time.getHours();
            let minute = time.getMinutes();
            let formattedHour = hour < 10 ? "0" + hour : hour;
            let formattedMinute = minute < 10 ? "0" + minute : minute;
            let formattedtime = `${formattedHour}:${formattedMinute}`;

            timespan.innerHTML = formattedtime;
            // newdiv.appendChild(timespan);
        }
        else {
            alert("Add task")
        }
    }
});

document.getElementById("hb").onclick = () => {
    let side = document.getElementById("side");
    if (side.style.visibility === "hidden") {
        side.style.visibility = "visible";
        side.style.position = "absolute";
        side.style.width = "100vw";
        side.style.left = "0";
        side.style.transition = "width 250ms ease-in-out";
        document.getElementById("hb").style.visibility = "hidden";
    }
    else {
        side.style.visibility = "hidden";
    }
}

document.getElementById("cancel").onclick = () => {
    let side = document.getElementById("side");
    if (side.style.visibility === "visible") {
        side.style.visibility = "hidden";
        side.style.width = "0vw"
        document.getElementById("hb").style.visibility = "visible";
    }
}
