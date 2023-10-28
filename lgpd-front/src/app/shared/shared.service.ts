import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { CourseService } from "../pages/course/course.service";
import { UserService } from "../pages/user/user.service";

//Criar esses exports
export interface Params {
    [key: string]: any;
}


@Injectable({
    providedIn: 'root'
})
export class SharedService {

    users: Array<{ id: string, first_name: string }> = [];
    courses: Array<{ id: string, name: string }> = [];

    userLabel: Array<{value: string, label: string}> = [];
    courseLabel: Array<{value: string, label: string}> = [];

    async convertUserToOption(): Promise<any[]>{
        this.users.forEach((user:{id: string, first_name:string})=>{
            let u = {
                value: user.id.toString(),
                label: user.first_name
            }
            this.userLabel.push(u);
        });
        return this.userLabel;
    };

    async convertCourseToOption(): Promise<any[]>{
        this.courses.forEach((courses:{id: string, name:string})=>{
            let c = {
                value: courses.id.toString(),
                label: courses.name
            }
            this.courseLabel.push(c);
        });
        return this.courseLabel;
    };

    /*
    getUsers(): Observable<any[]> {
        return this.http
            .get("http://localhost:3000/getAllUsers")
            .pipe(
                map(x => {
                    Object.values(x).map((_user) => {
                        let u = { value: _user.id, label: _user.first_name }
                        this.users.push(u);
                    })
                    console.log(x);
                    console.log(this.users);
                    return this.users;
                })
            );
    }

    getCourses(): Observable<any[]> {
        return this.http
            .get("http://localhost:3000/getAllCourses")
            .pipe(
                map(x => {
                    Object.values(x).map((_course) => {
                        let c = { value: _course.id, label: _course.name }
                        this.courses.push(c);
                    })
                    console.log(x);
                    console.log(this.courses);
                    return this.courses;
                })
            );
    }
    */
    constructor(private userService:UserService, private coursesService:CourseService) {}
}
