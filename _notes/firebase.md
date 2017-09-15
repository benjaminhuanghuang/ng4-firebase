## Setup
- Step 1: Create firebase account
https://firebase.google.com

- Step 2: Create project

- Step 3: Click "Add firebase to you XXX app"
  Copy-past the link and the config of firebase popped up

- Step 3.1 Set access rules
```
  {
    "rules": {
      ".read": true,
      ".write": "auth != null"
    }
  }
```

- Step 4: Install dependencies
  npm i firebase angularfire2 -S

- Step 5: Import firebase into app.module.ts
```
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

imports: [
  AngularFireModule.initializeApp(firbaseConfig),
  AngularFireDatabaseModule
]
```

- Step 6: Inject firebase in app.component.ts
```
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class AppComponent {
  title = 'app';

  constructor(af: AngularFire)
  {
    console.log(af);
  }
}
```
## Read
Read list or object
```
  ngOnInit() {
    // return observable
    this.cuisines = this.fdb.list("/cuisines");
    this.restaurant = this.fdb.object('/restaurant');
  }
```

Template
```
<li *ngFor="let c of cuisines | async">{{c.$value}}</li>

{{(restaurant|async)?.name}}
```

## Update
```
  cuisines: FirebaseListObservable<any[]>;
  
  this.cuisines.push({
      name: "Asian",
      details: {
        description: "what?"
      }
    });

  this.db.object('/restaurant').update({
    name:'new name',
    rating: 5
  })

  // Overwrite or create new one
  this.db.object('/restaurant').set({
    name:'new name',
    rating: 5
  })
```

## Delete
```
  // return a promise
  this.fdb
    .object("/restaurant").remove()
    .then(() => {});
```

## Join
```
  this.cuisines = this.fdb.list("/cuisines");
  this.restaurants = this.fdb.list("/restaurants").map(restaurants=>{
    restaurants.map(restaurant=>{
      // an observable
      restaurant.cuisineType = this.fdb.object('/cuisines/'+restaurant.cuisine)
    });
    return restaurants;  
  });
```


