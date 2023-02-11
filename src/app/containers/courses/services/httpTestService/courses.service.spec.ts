import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { flush, TestBed } from '@angular/core/testing';
import { COURSES, findLessonsForCourse } from 'server/db-data';
import { Course } from '../../model/course';
import { CoursesService } from './courses.service';


describe('CoursesService', () => {

  /**
   * @description
   * @Module in test we need to use testing mudule of the original module to test the suit
   * @HttpTestingController Is ntesting module help to get control the http request
   */
  let service: CoursesService, HttpTestingControllers: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CoursesService
      ]
    });
    service = TestBed.inject(CoursesService);

    HttpTestingControllers = TestBed.inject(HttpTestingController);
  });

  it('Should fetch all courses data', () => {
    service.findAllCourses().subscribe((courses) => {
      // When observable resolves, result should match test data

      expect(courses).toBeTruthy('Not retunred any data');

      expect(courses.length).toBe(12, "Incorrect number of courcess found!!");

      const course = courses.find((item) => item.id === 12);

      expect(course?.titles.description).toEqual("Angular Testing Course");
    });

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = HttpTestingControllers.expectOne('/api/courses');

    // Assert that the request is a GET.
    expect(req.request.method).toEqual("GET");


    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush({ payload: Object.values(COURSES) });
  });

  it('Should find the course by ID', () => {
    service.findCourseById(12).subscribe((course) => {
      expect(course).toBeTruthy();

      expect(course.id).toBe(12)
    });

    const req = HttpTestingControllers.expectOne('/api/courses/12');

    expect(req.request.method).toEqual("GET");

    req.flush(COURSES[12]);
  });

  it('Should update the data with ID', () => {

    const changes: Partial<Course> = { titles: { description: 'Testing Is done with hitesh!' } };

    service.saveCourse(12, changes).subscribe((value) => {

      expect(value.id).toBe(12);

      expect(value.titles.description).toBe('Testing Is done with hitesh!');
    });

    const req = HttpTestingControllers.expectOne('/api/courses/12');

    expect(req.request.method).toEqual('PUT');

    expect(req.request.body.titles.description).toEqual(changes.titles?.description);

    console.log({ ...COURSES[12], ...changes }); // Copying the code with spread operator.

    req.flush({ ...COURSES[12], ...changes });
  });

  it('should give an error if save course fails', () => {

    const changes: Partial<Course> = { titles: { description: 'Testing Course' } };

      service.saveCourse(12, changes).subscribe((a) => fail("the save course operation should have failed"),

      (error: HttpErrorResponse) => {
        expect(error.status).toBe(500);
      }
    );

    const req = HttpTestingControllers.expectOne('/api/courses/12');

    expect(req.request.method).toEqual("PUT");

    req.flush('Save course failed', {
      status: 500,
      statusText: 'Internal Server Error'
    });
  });

  it('should find a list of lessons', () => {

    service.findLessons(12)
      .subscribe((lessons) => {

        expect(lessons).toBeTruthy();

        expect(lessons.length).toBe(3);

      });

    const req = HttpTestingControllers.expectOne(
      req => req.url == '/api/lessons');

    expect(req.request.method).toEqual("GET");
    expect(req.request.params.get("courseId")).toEqual("12");
    expect(req.request.params.get("filter")).toEqual("");
    expect(req.request.params.get("sortOrder")).toEqual("asc");
    expect(req.request.params.get("pageNumber")).toEqual("0");
    expect(req.request.params.get("pageSize")).toEqual("3");

    req.flush({
      payload: findLessonsForCourse(12).slice(0, 3)
    });


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    HttpTestingControllers.verify();
  });

});
