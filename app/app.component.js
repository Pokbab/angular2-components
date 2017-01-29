//import { Component } from '@angular/core';
//
//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular'; }
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ViewEncapsulation enum 뿐만 아니라 Component도 필요하다.
var core_1 = require('@angular/core');
// 테스트로더를 사용해 템플릿을 임포트할 수 있다.
//import template from './app.html!text';
// TaskList directive에 의존성 추가
//import TaskList from './task-list/task-list.js';
// 이것은 우리의 메인 애플리케이션 컴포넌트를 만든다.
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ngc-app',
            templateUrl: 'app/app.html',
            encapsulation: core_1.ViewEncapsulation.None // 뷰 캡슐화를 무시하는 설정
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map