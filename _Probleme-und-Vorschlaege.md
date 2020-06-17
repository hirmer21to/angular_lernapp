# Problems, issues, comments and suggestions 

## Chapter Environment<hr>
**Proposals** 

&check; includes experimental TOC menu

**Errors**

\-

**Status**

&check; Revised \
&check; Proofreading

## Chapter First Angular-App<hr>
**Proposals**

&check; includes experimental TOC menu

**Errors**

\-

**Status**

&check; Revised \
&check; Proofreading

## Chapter TypeScript<hr>
**Proposals**

&check; includes experimental TOC menu

&minus; missing TypeScript Cheat Sheet -> found no good one

**Errors**

\-

**Status**

&check; Revised \
&check; Proofreading

## Chapter Introduction<hr>
**Proposals**

&check; includes experimental TOC menu

**Errors**

\-

**Status** 

&check; Revised \
&check; Proofreading

## Chapter App<hr>
**Proposals**

&check; includes experimental copy-to-clipboard icon for code snippets \
&check; includes experimental info icon to official documentation for command line instructions

**Errors**

&check; ~~The Semantic UI CSS-Framework was not automatically loaded into my web page. I had to restart the app with 'ng serve --open'~~ \
-> angular.json is not hot reloaded, a restart is always necessary

**Status**

&check; Revised \
&check; Proofreading

## Chapter Components<hr>
**Proposals**

&check; Unter dem Punkt Compontent  > „Communication between Logic and View“ ist bei den Übungsaufgaben zunächst nicht ganz klar was gemacht werden soll bzw. was genau sie im Code anpassen sollen \
-> Stackblitz-Code can not be changed at the moment (see remarks under General)

&check; ~~Bei Punkt 5 ist nicht beschrieben, dass man auf #info mit info.value zugreifen kann~~\
-> Local template references hold pointer to a DOM node, therefore all attributes of the DOM node are available; this means its not always and not only `value`

**Errors**

\-

**Status**

&check; Revised \
&check; Proofreading

## Chapter Components, FormModules and Directives<hr>

**Proposals**

&minus; Make two separate user stories out of the cluttered one -> separation of concerns \
&minus; Explain why the lecture id must be different -> used as "primary key" and handle to find unique lecture \
&minus; Explain main feature of FormValidation and maybe RegEx checks for user input ([Angular Doc: Form Validation](https://angular.io/guide/form-validation)) \
&minus; The syntax box diverges from my newly introduced style in the chapter before

**Errors**

&check; At the moment for each lecture item there is an `a` element nested in another `a` element -> this makes no sense and the inner a is not used at the moment (event handler for `click` is only registered on the outer one)

&check; ~~After finishing the sub-chapter 'Display a List' the application did not compile for me. 
In the file 'shared/lecture.ts' I had to replace:~~

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
-> I had the same compiler error, but after restarting the application everything worked fine; maybe a bug? Because [Time](https://angular.io/api/common/Time) is definitely part of the Angular API.

-> I had no problems so the bug seems to be fixed

**Status**

&cross; Revised \
&check; Proofreading

## Chapter Reusable Components<hr>

**Proposals**

**Errors**

**Status**

&cross; Revised \
&cross; Proofreading

## Chapter Services<hr>

**Proposals**

&check; ~~Außerdem wird unter Services > „What is a Service“ „key word“ anstelle von „keyword“ verwendet~~\
-> Fixed

**Errors**

**Status**

&cross; Revised \
&cross; Proofreading

## Chapter Routing<hr>

**Proposals**

**Errors**

**Status**

&cross; Revised \
&cross; Proofreading

## Chapter HTTP<hr>

**Proposals**

&minus; HTTP REST has even more commands like `PATCH`, `HEAD`, `OPTIONS`

**Errors**

&minus; HTTP PUT should use actual resource location (TL3 uses this style for updates!), like `http://localhost:4200/lecture/<lectured_id>` \
&minus; I doubt if `handleError` is in any way comprehensible as there are almost no explanations how RxJS works with this ([RxJS: catchError](https://rxjs-dev.firebaseapp.com/api/operators/catchError))

&minus; ~~Following things are not needed in lecture-add.component.ts. They are not used by the application and can be deleted (and should be removed from the learn app):~~

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
-> Yeap, `lectures` and `getLectures()`are not needed, anyhow, `add` has indeed an event binding in the template and should therefore be kept!

**Status**

&cross; Revised \
&cross; Proofreading

## Chapter Finish the App<hr>

**Proposals**

&minus; Instead of defining an own weekdays enum Angular provides one by its own ([Angular API: WeekDay Enum](https://angular.io/api/common/WeekDay)); with reverse mapping its even possible get back the name by number

**Errors**

**Status**

&cross; Revised \
&cross; Proofreading

## General<hr>
**Proposals**

&check; all code snippets feature new Prism style \
&check; all chapters feature a "Further references" box, but from chapter "Components, FormModules and Directives" on this list is maybe not complete!

&cross; there are still inline styles -> remove remaining ones \
&check; there is no access to the Stackblitz projects -> Fork into own GitHub-Repository is possible; to host and develop in university-internal GitLab instance it would be possible to define GitHub-Repo as Push Mirror (see GitLab Documenation > [Pushing to a remote repository](https://docs.gitlab.com/ee/workflow/repository_mirroring.html#pushing-to-a-remote-repository-core))

**Errors** \
\-
