//Add esses imports
import { Component, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})

export class TeacherListComponent implements OnInit {
  faPencil = faPencil;
  faTrash = faTrash;

  courseLabel: Array<{ value: string, label: string }> = [];
  teachers: any[] = [];

  constructor(private teacherService: TeacherService, private sharedService: SharedService) { }

  async ngOnInit(): Promise<void> {
    this.courseLabel = await this.sharedService.convertCourseToOption();
  }

  getLabelCourse(value: string):string | undefined{
    let course = this.courseLabel.find((course) => course.value == value)
    return course?.label;
  }

  async listTeachers(): Promise<void> {
    this.teachers = await this.teacherService.get<any[]>({
      url: "http://localhost:3000/getAllTeachers",
      params: {

      }
    });
  }

  async delete(id: number): Promise<void> {
    if (confirm("Deseja deletar este professor?")) {
      await this.teacherService.delete<any>({
        url: `http://localhost:3000/deleteTeacher/${id}`,
        params: {

        }
      });
      await this.listTeachers();
    }
  }


  onConfirm(value: any) {
    alert("Value:" + value);
  }
}
