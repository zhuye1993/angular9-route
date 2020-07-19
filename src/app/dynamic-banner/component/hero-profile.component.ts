import { Component, Input }  from '@angular/core';

import { AdComponent }       from '../ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}


