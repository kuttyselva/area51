import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.css"]
})
export class ImageComponent implements OnInit {
  image:'hi';
  imglink:any='kutty';
  entries=[];
  constructor() {}

  ngOnInit() {}
  onEntervalue(e) {
    this.image=e.target.value;
  }
  getImage(){
    this.imglink=this.image;
    this.entries.push(this.image);
  
    this.sendData();
  }
  
    sendData(){
    const name = this.entries;
   console.log(name);
    const Http = new XMLHttpRequest();
    
    const url='https://script.google.com/macros/s/AKfycbx--SSwejQ6aJqRF1O_8srNGlt7XcPjYikmCRQsD8jkpv9qIMM/exec?name='+name+'';
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
   
    }
    
   
  }

  
}
