import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  templateUrl: "./page2.component.html",
  styleUrls: ["./page2.component.css"],
  selector: "app-page2"
})
export class Page2Component { 

  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }
}
