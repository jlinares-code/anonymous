// Almacenar el mensaje que se escribirá en pantalla
const messageContent = `
HALLOWEEN

INVITACION PARA: JOHN LINARES

Día: 31 de octubre.
Hora: 9:00 pm.
Lugar: El bunker.

Temática: ASESINOS
La temática consiste en disfrazarse de un asesino.
Puede ser ficticio.
Puede ser real.
Puedes crearlo.

Concurso:
- Mejor disfraz. (Individual)
- Mejor equipo. (Los equipos se crearán el mismo día)

Actividades:
Música/DJ/Banda?
Juegos por equipos. Performance. 
Competencias. Duelo a Muerte.

Premiación: Trago / Dinero en efectivo

Inversión: S/.20.00 (bebida y premiación)
Fecha límite de pago 27/10/24 23:59

Invitados: Es una fiesta privada. Si la persona se compromete puede entrar, previa confirmación.
Las invitaciones son individuales, si no está en la lista No ingresa.

No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.
No se dejará ingresar a las personas que no cuenten con caracterización.

Sent from my IPhone.
`;

// Variables del DOM
const input = document.getElementById('codeInput');
const messageDiv = document.getElementById('message');

// Evento cuando se escribe en el input
input.addEventListener('input', function() {
    const enteredCode = input.value;

    if (enteredCode === '150396') {
        startBlinkingEffect();
    }
});

// Función para hacer que la página titile
function startBlinkingEffect() {
    document.body.classList.add('blinking');
    
    setTimeout(() => {
        document.body.classList.remove('blinking');
        input.style.display = 'none';
        displayMessageLetterByLetter();
    }, 2000); // 2 segundos de titileo
}

// Función para mostrar el mensaje letra por letra
function displayMessageLetterByLetter() {
    let index = 0;
    
    messageDiv.classList.remove('hidden');
    
    const interval = setInterval(() => {
        if (index < messageContent.length) {
            messageDiv.innerHTML += messageContent[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 30); // Velocidad de aparición de letras (50ms)
}
