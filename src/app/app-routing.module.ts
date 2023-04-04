import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {JokeComponent} from "../joke/joke.component";
import {TodoComponent} from "../todo/todo.component";
import {WeatherComponent} from "../weather/weather.component";

const routes: Routes = [
  {path: 'Joke', component: JokeComponent},
  {path: 'Todo', component: TodoComponent},
  {path: 'Weather', component: WeatherComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule{

}
