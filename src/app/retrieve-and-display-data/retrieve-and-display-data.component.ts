import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule, NgFor } from '@angular/common';
import { IECarsData } from '../iecars-data';


@Component({
  selector: 'app-retrieve-and-display-data',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './retrieve-and-display-data.component.html',
  styleUrl: './retrieve-and-display-data.component.css'
})
export class RetrieveAndDisplayDataComponent  {
  data: Array<IECarsData> = [];

  constructor(public dataService: DataService) { }


}

