- Step 1: Create firebase account
https://firebase.google.com

- Step 2: Create project

- Step 3: Click "Add firebase to you XXX app"
  Copy-past the link and the config of firebase popped up

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