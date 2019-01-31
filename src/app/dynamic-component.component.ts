import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  templateUrl: "./dynamic-component.component.html",
  styleUrls: ["./dynamic-component.component.css"],
  selector: "app-dynamic-component"
})
export class DynamicComponentComponent { 

  public readonly players: { firstName: string, lastName:string }[] = [
    { firstName: "Steph", lastName: "Curry" },
    { firstName: "LeBron", lastName: "James" },
    { firstName: "Chris", lastName: "Paul" }
  ];
  
  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }
}
