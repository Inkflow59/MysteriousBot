var start = 'Bonjour ', name, end = ' !', result;

name   = prompt('Quel est votre prenom ?');
result = start + name + end;
alert(result);

var age = parseInt(prompt("Vous avez quel age ?"));

if (age == 0) {

    alert('COMMENT FAÎTES VOUS !!??.');

} else if (-2 <= age && age <= 120) {

    alert("Vous avez donc " + age + ' ans');

} else {

    alert("Votre âge est ... bizarre.");

}