//import { Component } from '@angular/core';
//
//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular'; }

// ViewEncapsulation enum 뿐만 아니라 Component도 필요하다.
import {Component, ViewEncapsulation} from '@angular/core';

// 테스트로더를 사용해 템플릿을 임포트할 수 있다.
//import template from './app.html!text';

// TaskList directive에 의존성 추가
//import TaskList from './task-list/task-list.js';

// 이것은 우리의 메인 애플리케이션 컴포넌트를 만든다.
@Component({
  selector: 'ngc-app', // 앵귤러에게 <ngc-app> 요소를 찾아 이 컴포넌트를 만들라고 지시한다.
  templateUrl: 'app/app.html', // 임포트된 HTML 템플릿 문자열을 사용하자.
  encapsulation: ViewEncapsulation.None // 뷰 캡슐화를 무시하는 설정
//  directives: [TaskList]
})
export class AppComponent {  }
