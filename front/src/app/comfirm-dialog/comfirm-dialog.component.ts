import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comfirm-dialog',
  templateUrl: './comfirm-dialog.component.html',
  styleUrls: ['./comfirm-dialog.component.scss'],
})
export class ComfirmDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ComfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { comfirmMethod: () => void; title: string; message: string }
  ) {}

  ngOnInit(): void {}

  triggerConfirm() {
    this.data.comfirmMethod();
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
