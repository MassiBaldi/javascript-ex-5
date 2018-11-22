// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.

// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età.
var studente = {
  'nome': 'Massimiliano',
  'cognome': 'Baldi',
  'età': 33,
};
console.log(studente);
//Stampare a schermo attraverso il for in tutte le proprietà
for(var key in studente ){
  console.log(studente[key]);
}
// - Creare un array di oggetti di studenti.
var arrayStudenti = [
  {
    'nome': 'Massimiliano',
    'cognome': 'Baldi',
    'età': 33,
  },
  {
    'nome': 'Mario',
    'cognome': 'Rossi',
    'età': 30,
  },
  {
    'nome': 'Bello',
    'cognome': 'Di Notte',
    'età': 52,
  },
];
console.log(arrayStudenti);
//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for(var i = 0; i < arrayStudenti.length; i++) {
  console.log(arrayStudenti[i].nome +' '+arrayStudenti[i].cognome);
}
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell’ordine: nome, cognome e età.
var studenteUtente = {
  'nome': 'x',
  'cognome': 'y',
  'età': 0,
};
var nomeStudenteUtente = prompt('Benvenuto nella famiglia BooleanCarees, inserisci il tuo nome');
studenteUtente.nome = nomeStudenteUtente;
var cognomeStudenteUtente = prompt('inserisci il tuo cognome');
studenteUtente.cognome = cognomeStudenteUtente;
var etaStudenteUtente = parseInt(prompt('quanti anni hai?'));
studenteUtente.età = etaStudenteUtente;
console.log(studenteUtente);

//OPZIONALE!!!
//Stampo a schermo attraverso il for in tutte le proprietà
for(var key in studenteUtente) {
  console.log(studenteUtente[key]);
}
//pusho studente utente nell'arrayStudenti
arrayStudenti.push(studenteUtente)
console.log(arrayStudenti);
//Ciclo su tutti gli studenti e stampo per ognuno nome e cognome età
for(var i = 0; i < arrayStudenti.length; i++) {
  console.log(arrayStudenti[i].nome +' '+arrayStudenti[i].cognome+' '+arrayStudenti[i].età);
}
