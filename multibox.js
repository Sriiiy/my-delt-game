// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Create a container for the button
    const buttonContainer = document.createElement("div");
    buttonContainer.style.position = "fixed";
    buttonContainer.style.top = "50%";
    buttonContainer.style.left = "0";
    buttonContainer.style.transform = "translateY(-50%)";
    buttonContainer.style.backgroundColor = "#333";
    buttonContainer.style.padding = "10px";
    buttonContainer.style.borderRadius = "0 10px 10px 0";
    buttonContainer.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.3)";
    buttonContainer.style.zIndex = "9999";

    // Create the button
    const button = document.createElement("button");
    button.textContent = "Enable Multibox";
    button.style.backgroundColor = "#2575fc";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s";

    // Button hover effect
    button.addEventListener("mouseenter", () => {
        button.style.backgroundColor = "#1e63c5";
    });
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "#2575fc";
    });

    // Append button to container
    buttonContainer.appendChild(button);

    // Append container to body
    document.body.appendChild(buttonContainer);

    // Add event listener to the button
    button.addEventListener("click", () => {
        try {
            // Execute the given code
            const c = app.initPlayer();
            c.connect(app.server.ws);
            setTimeout(() => c.protocol.sendSpawn(), 3000);

            // Notify the user
            alert("Multibox Enabled!");
        } catch (error) {
            console.error("An error occurred while enabling Multibox:", error);
            alert("Failed to enable Multibox. Check the console for more details.");
        }
    });
});
