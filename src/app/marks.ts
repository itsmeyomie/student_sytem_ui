import { Student } from "./students";

export interface Marks {
    marksId:number,
    maths:number,
    english:number,
    chemistry:number,
    studentId:Student,
    total:number,
    average:number,
    grade:string
}

