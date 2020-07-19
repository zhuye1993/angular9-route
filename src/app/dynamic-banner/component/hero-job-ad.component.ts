import { Component, Input } from '@angular/core';

import { AdComponent }      from '../ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.name}}</h4>
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}

