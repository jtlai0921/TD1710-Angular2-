import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name = '';

  constructor() { }

  ngOnChanges() {
    console.log('onChanges');
  }

  ngOnInit() {
    console.log('onInit');
  }

  ngDoCheck() {
    console.log('doCheck');
  }

  ngAfterContentInit() {
    console.log('afterContentInit');
  }

  ngAfterContentChecked() {
    console.log('afterContentChecked');
  }

  ngAfterViewInit() {
    console.log('afterViewInit');
  }

  ngAfterViewChecked() {
    console.log('afterViewChecked');
  }

  ngOnDestroy() {
    console.log('onDestroy');
  }

}
