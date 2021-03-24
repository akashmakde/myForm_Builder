import { FormBuilder } from '@angular/forms';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  @Input() selectlistArray: any[];
  @Input() listHeading: string;
 


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
    

}
}