import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
import {Resizable, ResizeEvent} from './../angular2-resizable';

@Component({
  selector: 'demo-app',
  directives: [Resizable, NgStyle],
  styles: [`
    .rectangle {
      position: relative;
      top: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 150px;
      background-color: #FD4140;
      border: solid 1px #121621;
      color: #121621;
      margin: auto;
    }
  `],
  template: `
    <div class="text-center">
      <h1>Drag and pull the edges of the rectangle</h1>
      <div
        class="rectangle"
        [ngStyle]="style"
        mwl-resizeable
        [validateResize]="validate"
        (onResizeEnd)="onResizeEnd($event)">
      </div>
    </div>
  `
})
export class DemoApp {

  public style: Object = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (event.rectangle.width < MIN_DIMENSIONS_PX || event.rectangle.height < MIN_DIMENSIONS_PX) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

}
