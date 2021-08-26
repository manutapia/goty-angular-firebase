import { Component, Input } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent {

  @Input() results:Game[] = []
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votes';
  showYAxisLabel = true;
  yAxisLabel = 'Videogames';

  colorScheme = 'nightLights'

  interval;

  constructor() {
  }

}
