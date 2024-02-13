import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { IECarsData } from '../iecars-data';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-rdd-with-material',
  standalone: true,
  imports: [NgFor, NgStyle,  CommonModule, MatSlideToggleModule, MatTableModule],
  templateUrl: './rdd-with-material.component.html',
  styleUrl: './rdd-with-material.component.css'
})
export class RddWithMaterialComponent {
  constructor(public dataService: DataService) { }

  tableDivStyle =
    'hidden';
    displayedColumns: string[] = ['rank', 'model' , 'quantity', 'changeQuantityPercent'];

  toggleChanged(event: any) {
    if (event.checked) {
      this.tableDivStyle = 'visible';
      console.log(this.tableDivStyle);
    } 
    else {
      this.tableDivStyle = 'hidden';
      console.log(this.tableDivStyle);
    }
  }
}
