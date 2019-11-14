const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Question 1
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")
  let seventies = entrepreneurs.filter(function(entrepreneur){
    return entrepreneur.year >= 1970 && entrepreneur.year < 1980; // retourne les entrepreneurs dont l'année est entre 1970 ET 1980
});
console.log(seventies);

// Question 2
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");
  let names = entrepreneurs.map(({id, first, last}) => `\n${first} ${last}`).join(''); // \n = saut de ligne
console.log(`${names}`)

// Question 3
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
  let currentAge = entrepreneurs.map(({id, year})=> 2019 - year);
console.log(currentAge)

// Question 4
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
  let lastName = entrepreneurs.map(({last}) => `\n${last}`).sort();
console.log(`${lastName}`)

// let permet de déclarer une variable dont la portée est celle du bloc courant, éventuellement en initialisant sa valeur.
// Un objet Map permet de retrouver ses éléments dans leur ordre d'insertion
// filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
// join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau (ou d'un objet semblable à un tableau). La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
// sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Par défaut, le tri s'effectue sur les éléments du tableau convertis en chaînes de caractères et triées selon les valeurs des unités de code UTF-16 des caractères.
