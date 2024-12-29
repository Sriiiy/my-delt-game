document.addEventListener("DOMContentLoaded", () => {
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

    document.body.appendChild(multiboxButton);

    multiboxButton.addEventListener("click", () => {
        // Wait until `app` is defined
        const checkApp = setInterval(() => {
            if (typeof app !== "undefined" && typeof app.initPlayer === "function") {
                clearInterval(checkApp);

                try {
                    const c = app.initPlayer();
                    if (c && app.server && app.server.ws) {
                        c.connect(app.server.ws);
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
                } catch (error) {
                    console.error("An error occurred while enabling Multibox:", error);
                }
            }
        }, 1000); // Check every second
    });
});
