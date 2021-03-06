import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  cuisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;
  exists;
  
  constructor(private fdb: AngularFireDatabase, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    // this.subscription = this.fdb.list("/cuisines").subscribe(x => {
    //   this.cuisines = x;
    //   console.log(this.cuisines);
    // });
    // return a observable
    this.cuisines = this.fdb.list("/cuisines", {
      query:{
        // orderByKey: true
        orderByValue: true
      }
    });
    this.restaurants = this.fdb.list("/restaurants").map(restaurants => {
      restaurants.map(restaurant => {
        // an observable
        restaurant.cuisineType = this.fdb.object(
          "/cuisines/" + restaurant.cuisine
        );
        restaurant.featureTypes = [];
        for (var f in restaurant.features) {
          restaurant.featureTypes.push(this.fdb.object("/features/" + f));
        }
      });
      return restaurants;
    });

    // an observable, get value of specify feature
    this.exists = this.fdb.object('/restaurants/1/features/1');

    this.exists.take(1).subscribe(x=>{
      if(x && x.$value)
        console.log('Exists');
      else
        console.log('Not exists');
    });
  }

  // ngOnDestroy()
  // {
  //   this.subscription.unsubscribe();
  // }

  add() {
    this.cuisines.push({
      name: "Asian",
      details: {
        description: "what?"
      }
    });
  }

  update() {
    this.fdb.object("/restaurant").set({
      name: "New name",
      rating: 5
    });
  }

  remove() {
    // return a promise
    this.fdb
      .object("/restaurant")
      .remove()
      .then(() => {});
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
     this.afAuth.auth.signOut();
  }
}
