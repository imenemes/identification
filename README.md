# Formulaire d'identification sécurisé
***

## Table of Contents
1. Récupération du projet
2. Langages utilisés
3. Failles évités

## Installation
***
```
$ git clone https://github.com/imenemes/identification
$ double cliquer sur le fichier index.htm
le formulaire sera affiché dans le navigateur

## Langages utilisés
***
```
* HTML
* CSS
* JAVASCRIPT
* pas de BDD

## Spécifications
***

* identifiant / mot de passe requis pour l'authentification sont : imen / securite
* Mot de passe encrypté lors de la saisie,  grace au type passeword de html
* Controle la longueur et de qualité de la saisie utilisateur par vérification javascript et html (maxlength et minlenght)
* EN cas de mauvaise authentification un message d'erreur n'indiquant pas si l'identifiant ou le mot de passe est incriminé
* Pour l'ajout d'utilisateur , le mot de passe saisie doit répondre à un certain format (plus de 8 caractères, une majuscule , une minuscule et un caractère spéciale"
* Vérification de l'existance de l'identifiant avant de l'accepter comme nouvel identifiant
* Vérification de la saisie , les chaamps doivent être remplies grace au required html
* Possibilité d'ajout d'un identifiant /mot de passe 
* un bouton reset 
* Les controles effectués sont client side , des controles server side avec BDD et php auraientt été plus efficaces (manque de temps)
* La prévention contre l'attaque d'injection JS na pas été traitée ici 





