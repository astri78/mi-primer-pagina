document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const container = document.getElementById("container");

    const noMessages = [
        "¡Esa no es la respuesta!",
        "¡Ya te dije que no!",
        "¡No es esa, baboso!",
        "¡Ya dije que no!",
        "¡Eres necio!"
    ];

    let noClickCount = 0;
    let canMoveContainer = true; // Permite mover el contenedor solo si es verdadero

    yesBtn.addEventListener("click", function() {
        showAlert("¡Te adoro, mi baboso ! ¡Gracias!");
        canMoveContainer = true; // Permite mover el contenedor al presionar "Sí"
    });
    yesBtn.addEventListener("click", function() {
        showAlert("¡te amo sabes, mi baboso ! ¡Gracias!");
        canMoveContainer = true; // Permite mover el contenedor al presionar "Sí"
    });
    noBtn.addEventListener("click", function() {
        if (noClickCount < noMessages.length) {
            showAlert(noMessages[noClickCount]);
            noClickCount++;
            if (canMoveContainer) {
                moveContainer(); // Mueve el contenedor solo si `canMoveContainer` es verdadero
            }
        } else {
            showAlert(noMessages[noMessages.length - 1]);
        }
    });

    function moveContainer() {
        const maxX = window.innerWidth - container.clientWidth;
        const maxY = window.innerHeight - container.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        container.style.position = 'absolute';
        container.style.top = `${randomY}px`;
        container.style.left = `${randomX}px`;
    }

    function showAlert(message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert';
        alertDiv.textContent = message;
        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000); // Elimina el mensaje después de 3 segundos
    }
});
