import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graduation',
  templateUrl: './graduation.component.html',
  styleUrls: ['./graduation.component.scss'],
})
export class GraduationComponent implements OnInit {
  itemsList:FormGroup;
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.itemsList=this.fb.group({
      itemLeft:[],
      itemRight:[],
    })
  }
  list1 = [
    // { listItem: 'AVENGERS',    selected: false },
    // { listItem: 'BATMAN',      selected: false },
    // { listItem: 'SPIDER-MAN',  selected: false },
    // { listItem: 'WONDER WOMEN',selected: false },
    // { listItem: 'IRON MAN',    selected: false },
    // { listItem: 'IRON MAN-2',  selected: false },
    // { listItem: 'IRON MAN-3',  selected: false },
  ];
  list2 = [
         //empty array
  ];

  public toggleSelection(item: { listItem: string; selected: boolean },list: number) {
    item.selected = !item.selected;
    if (list === 1) {
      this.list2.forEach((item) => {
        item.selected = false;
      });
    }
    if (list === 2) {
      this.list1.forEach((item) => {
        item.selected = false;
      });
    }
  }

  public moveSelected(direction) {
    if (direction === 'left') {
      this.list2.forEach((item) => {
        if (item.selected) {
          this.list1.push(item);
        }
      });
      this.list2 = this.list2.filter((i) => !i.selected);
      //removing selected item class
      this.removeSelected(this.list1);
    } else {
      this.list1.forEach((item) => {
        if (item.selected) {
          this.list2.push(item);
        }
      });
      this.list1 = this.list1.filter((i) => !i.selected);
      //removing selected item class
      this.removeSelected(this.list2);
    }
  }

  public moveAll(direction: string) {
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
  public removeSelected(list) {
    list.forEach((item) => {
      if (item.selected) {
        item.selected = !item.selected;
      }
    });
  } //removing color of selected items if moved to other list ends

  addItemLeftList(){
    let item = { listItem:null,  selected: false };
    item.listItem =  this.itemsList.get('itemLeft').value;
    if ( item.listItem != null) {
      this.list1.push(item);           
    }
   this.itemsList.controls['itemLeft'].setValue(null);
  }
  addItemRightList(){
    let item = { listItem:"",  selected: false };
    item.listItem =  this.itemsList.get('itemRight').value;
    if ( item.listItem != null) {
      this.list2.push(item);           
    }   this.itemsList.controls['itemRight'].setValue(null);
  }
}
