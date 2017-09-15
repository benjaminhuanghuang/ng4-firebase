- Upgrade npm 
  npm install -g npm 

- Angular Cli
  https://cli.angular.io/
  ```
  # if you have the wrong cli version only
  npm uninstall -g angular-cli
  npm uninstall -g @angular/cli
  npm cache clean

  # reinstall clean version
  npm install -g @angular/cli@latest

  ng --version
  ng new my-app  
  or ng new appName --directory ./
  cd my-app
  ng serve
  ```
- OnInit, OnDestroy
  ```
    ngOnInit() {
    this.subscription = this.fdb.list("/cuisines").subscribe(x => {
      this.cuisines = x;
      console.log(this.cuisines);
    });
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }
  ```

- Async pipe
```
this.cuisines = this.fdb.list("/cuisines");
```
Template
```
<li *ngFor="let c of cuisines | async">{{c.$value}}</li>

{{(restaurant|async).name}}
```
