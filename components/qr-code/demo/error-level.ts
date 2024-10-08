import { Component } from '@angular/core';

import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'nz-demo-qr-code-error-level',
  standalone: true,
  imports: [NzQRCodeModule, NzSegmentedModule],
  template: `
    <nz-qrcode nzValue="https://github.com/NG-ZORRO/ng-zorro-antd/issues" [nzLevel]="errorLevel"></nz-qrcode>
    <nz-segmented [nzOptions]="options" (nzValueChange)="handleIndexChange($event)"></nz-segmented>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
      }

      nz-qrcode {
        margin-bottom: 12px;
      }
    `
  ]
})
export class NzDemoQrCodeErrorLevelComponent {
  options: Array<'L' | 'M' | 'Q' | 'H'> = ['L', 'M', 'Q', 'H'];
  errorLevel: 'L' | 'M' | 'Q' | 'H' = 'L';

  handleIndexChange(e: number): void {
    this.errorLevel = this.options[e];
  }
}
