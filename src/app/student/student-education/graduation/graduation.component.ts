import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graduation',
  templateUrl: './graduation.component.html',
  styleUrls: ['./graduation.component.scss']
})
export class GraduationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  list1 = [
    { movies: 'AVENGERS', selected: false },
    { movies: 'BATMAN', selected: false },
    { movies: 'SPIDER-MAN', selected: false },
    { movies: 'WONDER WOMEN', selected: false },
    { movies: 'IRON MAN', selected: false },
    { movies: 'IRON MAN-2', selected: false },
    { movies: 'IRON MAN-3', selected: false },
  ];
  list2 = [
    // { movies: '', selected: false },
    // { movies: 'item 7', selected: false }
  ];

  public toggleSelection(item:{movies: string;selected: boolean}, list:number) {
    item.selected = !item.selected;
    if(list===1){
      this.list2.forEach(item=>{
        item.selected=false; 
      })
    }
    if(list===2){
      this.list1.forEach(item=>{
        item.selected=false; 
      })
    }
  }

  public moveSelected(direction) {
    if (direction === 'left') {
      this.list2.forEach(item => {
        if (item.selected) {          
          this.list1.push(item);         }
      });
      this.list2 = this.list2.filter(i => !i.selected);
      //removing selected item class     
      this.removeSelected(this.list1);
      // this.list1.forEach(item=>{
      //   if(item.selected){
      //     item.selected = !item.selected;
      //   }
      // })

    } else {
      this.list1.forEach(item => {
        if (item.selected) {          
          this.list2.push(item);
        }
      });
      this.list1 = this.list1.filter(i => !i.selected);
      //removing selected item class
      this.removeSelected(this.list2);     
    }
  }

  public moveAll(direction:string) {
    if (direction === 'left') {
      this.list1 = [...this.list1, ...this.list2];
      this.list2 = [];
      //removing selected item 
      this.removeSelected(this.list1);     
    } else {
      this.list2 = [...this.list2, ...this.list1];
      this.list1 = [];
      //removing selected item 
      this.removeSelected(this.list2);     
    }
  }
  //removing color of selected items if moved to other list
  public removeSelected(list){
    list.forEach(item=>{
      if(item.selected){
        item.selected = !item.selected;
      }
    })
  }//removing color of selected items if moved to other list ends

}
