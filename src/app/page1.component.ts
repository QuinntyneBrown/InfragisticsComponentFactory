import { Component, Injector, ViewChild, ViewContainerRef, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { DynamicComponentComponent } from './dynamic-component.component';

@Component({
  templateUrl: "./page1.component.html",
  styleUrls: ["./page1.component.css"],
  selector: "app-page1"
})
export class Page1Component implements OnInit { 

  constructor(
    private readonly _componentFactoryResolver: ComponentFactoryResolver,
    private readonly _injector: Injector

  ) { }

  ngOnInit() {
    let componentFactory: any = this._componentFactoryResolver.resolveComponentFactory(DynamicComponentComponent);
    const ref: any = this.target.createComponent(<any>componentFactory, null, this._injector);
  }

  @ViewChild("target", { read: ViewContainerRef })
  target: ViewContainerRef;
  
  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }
}
