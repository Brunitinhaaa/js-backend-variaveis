let raio;

function comprimento(raio) {
    return 2 * Math.PI * raio;
}
function area(raio) {
    return Math.PI * (raio ** 2);
}
console.log((comprimento(raio).toFixed([1])));
console.log((area(raio).toFixed([2])));
