import {Component} from 'angular2/core';
import {NavigationComponent} from './navigation.component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [NavigationComponent]
})
export class AppComponent {
    loggedInUserName:string = "Manali Khanna";
}