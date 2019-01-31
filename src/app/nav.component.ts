import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
  selector: "app-nav"
})
export class NavComponent { 

  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }
}
