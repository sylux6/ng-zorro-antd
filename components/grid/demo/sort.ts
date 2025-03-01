import { Component } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'nz-demo-grid-sort',
  imports: [NzGridModule],
  template: `
    <div nz-row>
      <div nz-col [nzSpan]="18" [nzPush]="6">col-18 col-push-6</div>
      <div nz-col [nzSpan]="6" [nzPull]="18">col-6 col-pull-18</div>
    </div>
  `
})
export class NzDemoGridSortComponent {}
