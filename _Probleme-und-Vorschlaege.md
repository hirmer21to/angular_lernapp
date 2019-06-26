# Chapter Application

The Semantic UI CSS-Framework was not automatically loaded into my web page. I had to restart the app with 'ng serve --open'



# Chapter Components, FormModules and Directives

After finishing the sub-chapter 'Display a List' the application did not compile for me. 
In the file 'shared/lecture.ts' I had to replace:

```
import { Time } from '@angular/common';
```

with:

```
export declare type Time = {
  hours: number;
  minutes: number;
};
```



# Chapter HTTP

Following things are not needed in lecture-add.component.ts. They are not used by the application and can be deleted (and should be removed from the learn app):

```
lectures: Lecture[];

ngOnInit() {
    this.getLectures();
}

getLectures(): void {
    this.lectureService.getLectures().subscribe(lectures => this.lectures = lectures);
}

add( name: string, building: string,
    floor: string, room: string, day: string, hours: number, 
    minutes: number, department?: string): void {
    ...
    this.lectures.push(lecture);
    ...
}
```
