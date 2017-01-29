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
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'ngc-app',
            //  template, // 임포트된 HTML 템플릿 문자열을 사용하자.
            encapsulation: core_1.ViewEncapsulation.None // 뷰 캡슐화를 무시하는 설정
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=app.js.map