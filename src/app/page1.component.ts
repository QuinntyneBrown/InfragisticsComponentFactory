import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.css"],
  selector: "app-page1"
})
export class Page1Component { 

  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }
}
