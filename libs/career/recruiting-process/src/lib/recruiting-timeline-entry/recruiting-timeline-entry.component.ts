import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { TimelineEntry } from '../recruiting-timeline/time-line-entry.model';

@Component({
  selector: 'cp-recruiting-timeline-entry',
  templateUrl: './recruiting-timeline-entry.component.html',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  styleUrls: ['./recruiting-timeline-entry.component.scss'],
})
export class RecruitingTimelineEntryComponent {
  @Input() entry?: TimelineEntry;
}
