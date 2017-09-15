import { Component, OnInit, OnDestroy } from "@angular/core";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  cuisines: FirebaseListObservable<any>;
  restaurant;

  private subscription;

  constructor(private fdb: AngularFireDatabase) {}

  ngOnInit() {
    // this.subscription = this.fdb.list("/cuisines").subscribe(x => {
    //   this.cuisines = x;
    //   console.log(this.cuisines);
    // });
    // return a observable
    this.cuisines = this.fdb.list("/cuisines");
    this.restaurant = this.fdb.object("/restaurant");
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
}
