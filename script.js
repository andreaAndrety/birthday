const targetDate = new Date('April 12, 2026 00:00:00').getTime();

// Mensajes configurables por fecha
const dailyMessages = {
    "4/6": {
        title: "¡Comienza la cuenta atrás!",
        text: "Hoy empieza la espera. Faltan poquitos días para tu cumple y ya estoy preparando todo. Eres la persona más especial y quiero que desde hoy sientas cuánto te adoro."
    },
    "4/7": {
        title: "¡Un día menos!",
        text: "Cada día que pasa me emociono más. Eres lo mas bello de Sincelejo y sus alrededores y espero que hoy tengas un día tan increíble como tú. ¡Sonríe, que ya casi es tu día!"
    },
    "4/8": {
        title: "Poco a poquito",
        text: "No hay nada más lindo que tu sonrisa, verte crecer y compartir estos momentos contigo. Que hoy esté lleno de cosas buenas para ti."
    },
    "4/9": {
        title: "¡Ya falta tan poco!",
        text: "Pienso en celebrar tu vida y no puedo evitar ser feliz. Gracias por ser como eres. ¡Te quiero muchísimo!"
    },
    "4/10": {
        title: "Solo faltan 2 días",
        text: "¡A dos días de que el mundo se haga un poco más brillante celebrándote a ti! Prepárate para disfrutar un fin de semana en un lugar nuevo."
    },
    "4/11": {
        title: "¡Mañana es el gran día!",
        text: "Me muero de ganas de abrazarte y desearte un feliz cumpleaños de frente. Descansa mucho hoy porque mañana sera un hermoso dia. ¡Feliz casi cumpleaños!"
    },
    "4/12": {
        title: "¡FELIZ CUMPLEAÑOS! 🎉",
        text: "¡Al fin llegó tu día especial! Eres mi persona favorita en el mundo entero. Que todos tus sueños se cumplan y que seas inmensamente feliz hoy y siempre. ¡Te quiero con todo mi corazón!",
        video: "https://www.youtube.com/embed/ehx5v9IXX08?autoplay=1"
    }
};

const defaultMessage = {
    title: "Esperando tu día especial...",
    text: "Paso a paso, día a día acercándonos al 12 de abril. Eres maravillosa."
};

function updateMessage() {
    const today = new Date();
    // Obtener formato mes/día sin ceros a la izquierda (ej: "4/6" para el 6 de abril)
    const month = today.getMonth() + 1; // getMonth es 0-indexado
    const day = today.getDate();
    const currentDateString = `${month}/${day}`;

    const messageData = dailyMessages[currentDateString] || defaultMessage;

    document.getElementById('message-title').textContent = messageData.title;
    document.getElementById('daily-message').textContent = messageData.text;

    const videoContainer = document.getElementById('video-container');
    const videoIframe = document.getElementById('video-iframe');
    
    if (messageData.video) {
        videoIframe.src = messageData.video;
        videoContainer.style.display = 'block';
    } else {
        videoContainer.style.display = 'none';
        videoIframe.src = '';
    }
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        // Ya es el cumpleaños o pasó
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return; // Detener actualizaciones
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatear con ceros a la izquierda
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Inicializar y configurar intervalos
updateMessage();
updateCountdown();
setInterval(updateCountdown, 1000);

// Actualizar el mensaje cada hora por si cambia de día mientras la página sigue abierta
setInterval(updateMessage, 1000 * 60 * 60);
