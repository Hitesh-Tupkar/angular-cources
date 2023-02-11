import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "../logger.service";

//Describe is use to define the name of titile for club of test suits.
describe('Calculator Services Test run ', () => {

   let calculator: CalculatorService, loggerSpy: any;

   /**
    * @description
    * @beforEach create a block will call independendent before every test suits.
    * Will not isolate any test suit.
    * @x will helps to disable the test suits or test assertion
    * @f is use to focus the test case.
    */
   beforeEach(() => {

      console.log("Calling Before Test suites");
      //const logger  = new LoggerService(); //Use with depencies

      loggerSpy = jasmine.createSpyObj('LoggerService', ["log"])

      //calculator = new CalculatorService(loggerSpy);

      TestBed.configureTestingModule({
         providers: [
            CalculatorService,
            { provide: LoggerService, useValue: loggerSpy }
         ]
      });
      
      calculator = TestBed.inject(CalculatorService);
   });

   /**
    * @description
    **@createSpyObj is getting ready fake and mock instance for the loggerService No need to add dependecy.
    **@spyOn with help to keep a track with dependency.
    *Best Practices only need the dependency for own service. Framework has lot off dependency here will difficult to manage all this.
    */

   it('Should add the two number ', () => {
      console.log("Calling ADD Test suites");

      // spyOn(logger, "log");

      const result = calculator.add(5, 5);

      expect(result).toBe(10);

      expect(loggerSpy.log).toHaveBeenCalledTimes(1);

      // pending();
   });

   it('Should subtract the two number ', () => {
      console.log("Calling Subtract Test suites");

      const result = calculator.subtract(5, 5);

      expect(result).toBeGreaterThanOrEqual(0);    //Assertions

      expect(loggerSpy.log).toHaveBeenCalledTimes(1);

      // pending();
   });

   xit('should be created', () => {

      expect(calculator).toBeTruthy();

   });
});
