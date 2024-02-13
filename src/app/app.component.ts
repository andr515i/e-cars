import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable, of} from 'rxjs';
import { RetrieveAndDisplayDataComponent } from "./retrieve-and-display-data/retrieve-and-display-data.component";
import { RddWithMaterialComponent } from "./rdd-with-material/rdd-with-material.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NgFor, RetrieveAndDisplayDataComponent, RddWithMaterialComponent]
})
export class AppComponent {
  title = 'e-cars-directives';

}
