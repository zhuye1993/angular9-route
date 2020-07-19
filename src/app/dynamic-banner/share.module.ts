import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { componets } from './component/utils';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './ad-banner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    [...componets],
    AdDirective,
    AdBannerComponent,
  ],
  declarations: [
    [...componets],
    AdDirective,
    AdBannerComponent,
  ],
  entryComponents: [
    [...componets]
  ]
})
export class ShareModule { }
