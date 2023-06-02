import { Data } from "@angular/router";

export class ProjectDetails {

    id:number;
    projectName:string;
    reason:string;
    division:string;
    department:string;
    startDate:Date;
    endDate:Date;
    location:string;
    status:string = "Register";
}
