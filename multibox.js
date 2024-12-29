// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Create the Multibox button
    const multiboxButton = document.createElement("button");
    multiboxButton.id = "enable-multibox";
    multiboxButton.innerText = "Enable Multibox";
    multiboxButton.style.position = "fixed";
    multiboxButton.style.top = "50px";
    multiboxButton.style.left = "10px";
    multiboxButton.style.padding = "10px 20px";
    multiboxButton.style.backgroundColor = "#2575fc";
    multiboxButton.style.color = "white";
    multiboxButton.style.border = "none";
    multiboxButton.style.borderRadius = "5px";
    multiboxButton.style.cursor = "pointer";
    multiboxButton.style.fontSize = "16px";
    multiboxButton.style.zIndex = "1000";

    // Add the button to the page
    document.body.appendChild(multiboxButton);

    // Add click event listener to the button
    multiboxButton.addEventListener("click", () => {
        try {
            // Check if the `app` object is defined
            if (typeof app !== "undefined" && typeof app.initPlayer === "function") {
                console.log("Initializing Multibox...");
                const c = app.initPlayer();

                // Check if the server property is defined before connecting
                if (c && app.server && app.server.ws) {
                    c.connect(app.server.ws);

                    // Delay sending the spawn protocol
                    setTimeout(() => {
                        if (c.protocol && typeof c.protocol.sendSpawn === "function") {
                            c.protocol.sendSpawn();
                            console.log("Multibox enabled successfully.");
                        } else {
                            console.error("Protocol or sendSpawn function not found.");
                        }
                    }, 3000);
                } else {
                    console.error("Server connection information is missing.");
                }
            } else {
                console.error("`app` is not defined or missing required methods.");
                alert("Failed to enable Multibox: `app` object not found.");
            }
        } catch (error) {
            console.error("An error occurred while enabling Multibox:", error);
            alert("An error occurred. Check the console for details.");
        }
    });
});

