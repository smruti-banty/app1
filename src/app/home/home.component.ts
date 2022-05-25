import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  propertyList: PropertyList[] = [];
  @ViewChild("modal")
  modalObject: any = "";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    let fv = form.value;
    let pl = new PropertyList();
    pl.propertyId= (Math.random() * 10000).toFixed();
    pl.propertyName = fv.name;
    pl.propertyDescription = fv.description;
    pl.propertySize = fv.size;
    this.propertyList.push(pl);
    form.reset();
    this.modalToggle();
  }
  modalToggle() {
    this
      .modalObject
      .nativeElement
      .classList
      .toggle('d-none');

  }
  onUpdate(val:any)
  {

  }
  onDelete(val:any)
  {
    this.propertyList=this.propertyList.filter(e=>e.propertyId!=val);
  }
}
class PropertyList {
  propertyId="";
  propertyName: string = "";
  propertyDescription: string = "";
  propertySize: number = 0;
}