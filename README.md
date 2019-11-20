# Formation Angular - Labs - Squadron Maker
## Préparation
1. Cloner le projet de base pour le lab
    
    ```
    > git clone https://github.com/Jet-dev/formation-angular.git
    ```
2. Se déplacer dans le dossier du projet
   
   ```
   > cd formation-angular
   ```
3. Récupérer le premier lab
   
    ```
    > git checkout lab-1
    ```
4. Installer le CLI
   
   ```
   > npm install -g @angular/cli
   ```
5. Installer les dépendances
   
   ```
   > npm install
   ```
6. Lancer le projet
   
   ```
   > npm start
   ```
7. Se rendre sur http://localhost:4200 et constater que l'application tourne bien.
8. Ouvrir le projet dans votre IDE préféré. (VS Code, Webstorm, ect)

## Lab 1 - Composants, Template & Databinding

> Nous allons nous baser sur un projet avec une structure simple et y créer un composant permettant de lister des Jets



1. Dans le composant Jet nous allons créer un composant 'jet-list' avec le CLI
   
   ```
   ng generate component jets/jet-list
   ```
2. Utilisons notre nouveau composant en l'ajoutant dans le template du composant Jets
3. Nous allons manipuler un objet Jet dans ce composant, c'est une bonne pratique d'en créer un model. 
   1. Créons un fichier jet.model.ts dans le répertoire app/model
   2. Le model va contenir les champs suivants :
      1. 'name' de type string
      2. 'year' de type number
      3. 'isActive' de type boolean ayant la valeur true par défaut
   3. Ainsi qu'un constructeur permettant d'initialiser tous les champs.
4. Grâce à ce model nouvellement créé nous allons pouvoir ajouter une propriété jets de type Jet[] dans notre composant jet-list. (sans oublier l'import !)

   ```typescript
   public jets: Jet[];
   ```
5. Afin de peupler la variable, un tableau de Jet est disponible dans le fichier lab-1.txt situé dans le dossier formation_file à la racine du projet. (copier/coller)
6. Affichons la liste des noms des jets dans une liste non ordonnée (\<ul\>).
7. Cachons les jets dont la propriété isActive est false grâce à une directive structurelle.
8. Appliquons la classe suivante aux jets pairs. (d'abord il faut l'ajouter dans la feuille de style correspondante !)

    ```css
    .grey-background {
        background-color: lightgrey;
    }
    ```
9.  Après la liste ajoutons un boutton, au clic on toggle entre voir toute la liste et cacher les jets ayant isActive a false.

   ```
   Un indice, il faut modifier le *ngIf comme cela

   *ngIf="jet.isActive || showEverything"   // showEverything est un boolean
   ``` 
10. Commit nos changements actuels.

   ```
    > git add -A
    > git commit -m  "wip Lab 1"
   ```
   ## Lab 2 - Input/Output, Services

> La structure de notre application a été créée, nous allons utiliser nos connaissances récemment acquises pour réfactorer l'application et la rendre dynamique.

### Récupération du lab
1. Récupérons le second lab.
    
    ```
    > git checkout lab-2
    ```

2. Démarrons l'application grâce au CLI.
   
   ```
   > npm start
   ```

### Le composant jet-item
1. Dans le composants Jet list, on affiche une liste de jets, nous allons commencer par créer un sous composant jet-item dans lequel nous allons isoler le template d'un élément de la liste.
2. 
   1. On crée le composant.
    
    ```
    > ng g c jets/jet-list/jet-item
    ```

    1. couper/coller la partie du template de jet-list qui nous intéresse.
    
    2. Au moyen d'une propriété annotée @Input nous allons passer un Jet à notre nouveau composant afin de pouvoir l'utiliser comme ceci.
    
       
    ```html
    <app-jet-item *ngFor="let jet of jets" [jet]="jet"></app-jet-item>
    ```
    
### Le composant jet-creation

 1. On crée le composant.
    
    ```
    > ng g c jets/jet-list/jet-creation
    ```

 2. couper/coller la partie du template de jet-list qui nous intéresse.

    > Vous pouvez noter l'utilisation de la directive [(ngModel)] qui permet de lié l'input en écriture et lecture aux champs de la propriété jet. Nous l'aborderons plus en détails lors du chapitre concernant les formulaires.


 3. Au moyen d'une propriété annotée @Output nous allons créer un évenement qui emet un Jet.
    
    ```html
    <app-jet-item *ngFor="let jet of jets" [jet]="jet"></app-jet-item>
    ``` 

### Le Jet Service

1. Nous allons créer un service responsable de stocker les Jets.
   
   ```
   ng g service shared/service/jet
   ```
2. Déplaçons la liste des jets du composant jet-list vers le service.
3. Il faut maintenant injecter le JetService dans le composant jet-list.
   
   ```typescript
   constructor(private jetService: JetService) {}
   ```
   > Notez qu'il est inutile d'ajouter le service dans les providers.


4. Une fois le service injecté, récupérons les jets. La méthode ngOnInit() est parfaite pour ça.
   
   ```typescript
    ngOnInit() {
        this.jets = this.jetService.jets;
    }
   ```
5. Ajoutons une méthode pour la création de jet dans notre service. 
   
   ```typescript
    createJet(jet: Jet) {
        this.jets.push(jet);
    }
   ```
6. Nous pouvons désormais appeler cette méthode depuis le composant jet-creation directement. 
   
   Cela nous permet de supprimer le @Output ainsi que pas mal de code dans le composant jet-list.

### Le composant jet-details

> Nous allons utiliser le jetService pour dynamiser le composant jet-details qui est statique pour l'instant.


1. Nous allons ajouter un EventEmitter<Jet> dans le JetService
   
   ```typescript
    jetSelected = new EventEmitter<Jet>();
   ```
2. Créons une méthode qui se chargera d'emettre l'évenement.
   
   ```typescript
    selectJet(jet: Jet) {
        this.jetSelected.emit(jet);
    }
   ```
3. Nous pouvons modifier jet-item pour appeler cette méthode lors du clic sur le composant
4. Dans le composant jet-details nous allons nous 'abonner' à l'event emitter. 
   
   Vous pouvez copier le code ci-dessous, nous reviendrons dessus dans le chapitre concerné à RxJS.
   
   ```typescript
    jet: Jet;

    constructor(private jetService: JetService) {
    }

    ngOnInit() {
        this.jetService.jetSelected.subscribe(jet => this.jet = jet)
    }
   ```
5. Cela fonctionne bien, toutefois nous pouvons constater que le composant est mal affiché au chargement de la page car il ne contient pas de valeurs dans la propriété 'jet'.
   
    Pour remédier à ça nous pouvons englober le template du composant dans un ng-container avec un *ngIf.
    ```html
        <ng-container *ngIf="jet">
            ...
        </ng-container>
    ```


# API REST
    ```
    https://us-central1-formation-71217.cloudfunctions.net/api/v1/jets
    ```