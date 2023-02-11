import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './containers/about/about.component';
import { CourseComponent } from './containers/courses/course/course.component';
import { HomeComponent } from './containers/courses/home/home.component';
import { CourseResolver } from './containers/courses/services/course.resolver';

const routes: Routes = [
  {
      path: "",
      component: HomeComponent

  },
  {
      path: "about",
      component: AboutComponent
  },
  {
      path: 'courses/:id',
      component: CourseComponent,
      resolve: {
          course: CourseResolver
      }
  },
  {
      path: "**",
      redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
