let taxa_juros, montante = 90000, capital_inicial = 60000, tempo = 24;

taxa_juros = (((montante / capital_inicial) ** (1 / tempo)) - 1);

console.log(`O seu financiamento de ${capital_inicial} teve uma taxa de juros de ${(taxa_juros * 100).toFixed([3])}%, pois após ${tempo} mes(es) você teve que pagar ${montante} reais.`);
