# TP 3  -Le routeur

> Nous allons mettre en place le routeur dans notre applicaiton !


## Routing !


1. Vérifier le base-href="/" dans le index.html 
2. Définir les routes de sorte que :
    1. / affiche le composant HomeComponent
    2. /jets affiche le composant JetsComponent
    3. /squadron affiche le composant SquadronComponent
 3. Ajouter les [routerLink] nécessaire dans le composant Header pour activer la navigation
 4. Avec Bootstrap il faut ajouter la classe 'active' sur l'élément \<li> qui va bien.
    Souvenez vous de ce que l'on a vu sur [routerLinkActive]
 5. Sur le composant Home il y a un 'bouton' Show me the jets !, modifions le pour qu'il nous montre vraiment les 
    jets ! (redirection vers => /jets)
 6. Les Jets on désormais un id ! 
    1. Modifier le model Jet pour y avoir un id:number obligatoire.
    2. Ajouter une route /jets/(id-du-jet) qui lorsqu'on y accède affiche le composant jets
        avec le jet qui correspond à l'id , déjà selectionné dans jet-details.
 7. Nous aimerions pouvoir avoir les routes suivantes dans notre application :
    1. /jets/(id-du-jet)/edit qui affiche le composant jetEditComponent
    2. /jets/id-du-jet qui affiche le composant jetDetailsComponent
    > Attention il faut que lorsque nous arrivions sur ces routes, les composants en questions s'affichent
    toujours dans le comosant Jets, a la droite de la liste de jet ! 
    (indice n°1: utilisons les routes enfants) (indice n°2: on n'a plus besoin de l'event emitter dans jetService)
8.  Nouvelle demande express du client ! Il aimerait qu'à l'ajout d'un jet dans un escadron, nous soyons directement
    redirigé vers la page de l'escadron ! ('/squadron')
9.  Argh, un petit malin à taper /toto dans son navigateur et l'appli à renvoyé une erreur !
    1. Créons un composant PageNotFoundComponent pour notifier l'utilisateur qu'il demande une page qui n'existe pas.
    2. A l'aide d'une wildcard redirigeons les path qui ne matchent pas, vers ce nouveau composant.

### 
