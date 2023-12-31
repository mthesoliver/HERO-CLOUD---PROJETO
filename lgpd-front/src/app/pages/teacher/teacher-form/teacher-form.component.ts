import { Component } from '@angular/core';

//add esses imports
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SharedService } from 'src/app/shared/shared.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent {
  teacher: any = {};
  form = new FormGroup({});
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          props: {
            label: 'Nome',
            placeholder: 'Nome do Professor',
            required: true,
          }
        },
        {
          key: 'course_id',
          type: 'input',
          props: {
            label: 'Id do Curso',
            placeholder:'Número do curso',
            required: true
          }
        }
      ]
    }
  ];

  onSubmit(){
    
  }

  /*
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService,
    private sharedService: SharedService
  ) {

    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id !== undefined && params.id !== null) {
        this.teacher = await this.teacherService.get<any>({
          url: `http://localhost:3000/teacher/${params.id}`,
          params: {

          }
        });
        this.model = this.teacher;
      } else {
        this.model = {}
      }

    });
  }

  
  */
}
