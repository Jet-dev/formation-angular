# LAB 4  Formulaire

> Notre application gère désormais des Jets, mais il nous manque quelque chose de crucial ! Des pilotes 

> Afin de recruter des pilotes il va nous falloir un formulaire adéquat.

## Template Driven
Notre objectif pour ce Lab va être de brancher avec un formulaire Template-Driven le 
composant Pilot.

1. Ajouter des ngModel sur les inputs ainsi que les attributs 'name'.
2. Ajouter une méthode onSubmit sur l'event ngSubmit du Form, qui log le contenu du formulaire.
3. Au moyen d'un @ViewChild, capturer le form dans le component.
4. Rendre les champs firstName, lastName et Email Obligatoires.
5. Ajouter une validation sur l'adresse email grâce au validator 'email'
6. Si le champs email est invalide et a été touché, Afficher un message d'erreur comme suit: 
  ```html
  <span class="help-block">Please enter a valid email address</span>
  ```
7. Desactiver le boutton submit si le form n'est pas valide
8. Ajouter la classe CSS 'has-error' sur les div.form-group don't l'input est invalide.
9. Ajouter un bouton qui reset le formulaire.
10. Au chargement du formulaire prénom doit être pré-remplit avec 'Maverick'
11. Regrouper les champs firstName, lastName et email dans un ngModelGroup nommé 'contactInfo'
12. Au submit afficher sous le formulaire les valeurs des champs FirstName/LastName/Email

## Reactive

> Vous pouvez stash ou commit votre code actuel sur une autre branch et checkout la branche 'lab-4-reactive'

1. Dans le component, créer un objet pilotForm: FormGroup
2. Dans le ngOnInit, remplir cet objet avec la structure du formulaire présent dans l'HTML
3. Rattacher le formGroup que l'on vient de créer , avec le form dans le html
4. Attacher les différents inputs gràce à la directive formControlName
5. Créer une méthode onSubmit() qui lors de l'event ngSubmit, va console.log() le contenu du formulaire
6. Rendre les champs FirstName, LastName et Email obligatoire
7. Ajouter une validation sur le champs Email
8. Si le champs email est invalide et a été touché, Afficher un message d'erreur comme suit: 
     ```html
     <span class="help-block">Please enter a valid email address</span>
     ```
9. Grouper FirstName, LastName et Email dans un FormGroup intitulé contactInformation
10. Ajouter un bouton 'Add Skill'
10. Au moyen d'un formArray, permettre à l'utilisateur d'insérer une liste de 'skills'
11. Dans le composant, ajouter une propriété forbiddenPilots: string[], contenant un tableau avec 2, 3 prénoms de 
personnes en qui vous ne feriez pas confiance pour piloter un avion.
12. Créer un validateur custom qui vérifie que l'utilisateur n'a pas l'un des prénoms dans la liste forbiddenPilots.
12. Au submit afficher sous le formulaire les valeurs des champs FirstName/LastName/Email
