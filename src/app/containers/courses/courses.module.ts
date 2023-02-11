import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AboutComponent } from '../about/about.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseComponent } from './course/course.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { HomeComponent } from './home/home.component';
import { CourseResolver } from './services/course.resolver';
import { CoursesService } from './services/httpTestService/courses.service';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CoursesCardListComponent,
    CourseDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatMomentDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CoursesCardListComponent,
    CourseDialogComponent
],
providers: [
    CoursesService,
    CourseResolver
]
})
export class CoursesModule { }
