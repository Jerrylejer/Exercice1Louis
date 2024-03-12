console.log("second script ok")

function longestWord(string) {
    // Je casse ma string à chaque espace et retourne un tableau de chaine de caractères
    var str = string.split(" ");
    // Mon mot le plus long à ce stade = 0
    var longest = 0;
    // Mon mot le plus long à ce stade est inconnu
    var word = null;
    // Je boucle sur mon tab str
    for (var i = 0; i < str.length; i++) {
        // Ma condition si mon mot le + long est inférieur à celui itéré à présent
        if (longest < str[i].length) {
            // longest prendra alors la valeur de mon itération présente
            longest = str[i].length;
            // et word sera initialisé avec cette même valeur
            word = str[i];
        }
    }
    // Je renvoie la valeur de ma variable "word"
    return word;
}
console.log(longestWord("Il fait très beau aujourd'hui et j'imagine les marmottes dans la montagne du Poitoux"));