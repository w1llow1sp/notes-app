import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  DxButtonModule,
  DxDateBoxModule,
  DxPopupModule,
  DxTagBoxModule,
  DxTextAreaModule,
  DxTextBoxModule
} from "devextreme-angular";
import {Tag} from "../../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {TagsServiceService} from "../../../service/tags-service.service";
import {RequestRemindService} from "../../../service/reminds-service.service";

@Component({
  selector: 'app-tags-details',
  standalone: true,
  imports: [
    DxPopupModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxTagBoxModule,
    DxDateBoxModule,
    DxButtonModule
  ],
  templateUrl: './tags-details.component.html',
  styleUrl: './tags-details.component.css'
})
export class TagsDetailsComponent {
  @Output() close = new EventEmitter<void>();
  @Input() tag!: Tag;

  isPopupVisible = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tagsService : TagsServiceService,
    private remindService: RequestRemindService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.tagsService.get(params['id']).subscribe((res:Tag) =>{
        this.tag =res;
        this.isPopupVisible = true
      })
    })}

  closePopup(): void {
    this.isPopupVisible = false;
    this.close.emit();
    this.router.navigate(['reminders'])
  }

  save(): void {

    this.tagsService
      .update(this.tag)
      .subscribe(() => {
        this.remindService.updateTagInReminds(this.tag)
        this.router.navigate(['tags']);
      this.closePopup();
    });
  }

}
/* @Output() close = new EventEmitter<void>();
  @Input() tag!: Tag;

  isPopupVisible = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tagsService : TagsServiceService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.tagsService.get(params['id']).subscribe((res:Tag) =>{
        this.tag =res;
        this.isPopupVisible = true
      })
    })}

  closePopup(): void {
    this.isPopupVisible = false;
    this.close.emit();
    this.router.navigate(['reminders'])
  }

  save(): void {

    this.tagsService.update(this.tag).subscribe(() => {
      this.router.navigate(['tags']);
      this.closePopup();
    });
  }*/
