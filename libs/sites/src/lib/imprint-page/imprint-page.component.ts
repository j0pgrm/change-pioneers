import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MarkdownComponent } from '@cp/ui';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'cp-imprint-page',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, TranslocoModule],
  templateUrl: './imprint-page.component.html',
  styleUrls: ['./imprint-page.component.scss'],
})

export class ImprintPageComponent {

}
