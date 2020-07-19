import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, SimpleChanges } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';
import { AdComponent } from './ad.component';
import { componentMap } from './component/utils';
@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  // styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {
  @Input() type: string = 'ad1' // 传入的key,确定加载那个组件
  @Input() data: any = {} // 传入组件的数据
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective; // 动态组件的指令
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type']) this.loadComponent()
  }

  loadComponent() {
    // adItem 要加载的组件类，以及绑定到该组件上的任意数据
    const adItem = new AdItem(componentMap[this.type], this.data) 
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }
}
