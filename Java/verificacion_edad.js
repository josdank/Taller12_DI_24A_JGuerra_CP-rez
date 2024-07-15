document.getElementById('verify-age-button').addEventListener('click', function() {
    const yearOfBirth = document.getElementById('year-of-birth').value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;
    const resultadoEdad = document.getElementById('resultado-edad');

    if (age >= 18) {
        resultadoEdad.textContent = `Tienes ${age} años. Eres mayor de edad.`;
    } else {
        resultadoEdad.textContent = `Tienes ${age} años. Eres menor de edad.`;
    }
});
