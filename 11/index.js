let diametro;

function volume(diametro) {
    return ((4 / 3) * ((diametro / 2) ** 3));
}
console.log(`O volume de uma esfera de raio ${(diametro / 2)} é ${Math.round(volume(diametro))} PI`);

