import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiModule, DummyService, Info } from '../../build/openapi';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'This is the News Mirror';
  info!: Info;

     public constructor(
       private dummyService: DummyService,
     ) {
      dummyService.getInfo().subscribe(i => this.info = i);
     }
}
