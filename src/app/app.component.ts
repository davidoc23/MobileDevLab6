import { Component, OnInit } from '@angular/core';
import { StudentService } from './Service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'student_app';
  mystudents:any[]=[];
  myweather:any[]=[];
  location:string = "";

  constructor(private service:StudentService){

  }

  ngOnInit(): void {
    this.service.getStudentData().subscribe((data)=>{this.mystudents = data.students});

    this.service.getWeatherData().subscribe((data)=>{this.myweather = data.weather; this.location = data.name;});
    
  }
}
