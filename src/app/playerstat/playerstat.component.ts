import { IplService } from './../ipl.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playerstat',
  templateUrl: './playerstat.component.html',
  styleUrls: ['./playerstat.component.css']
})
export class PlayerstatComponent implements OnInit {
  li;
  maxall;
  maxwk;
  maxbat;
  maxbowl;
  constructor(private IplService :IplService) { }

  ngOnInit() {
    this.IplService.sortbyprice().subscribe(res =>{
        this.li = res["stat"];
    })
    this.IplService.maxpriceallrounder().subscribe(res =>{
      this.maxall = res["stat"];
      console.log("Hello");
    })
    this.IplService.maxpricewicket().subscribe(res =>{
      this.maxwk = res["stat"];
      console.log("Hello");
    })
    this.IplService.maxpricebat().subscribe(res =>{
      this.maxbat = res["stat"];
      console.log("Hello");
    })
    this.IplService.maxpricebowl().subscribe(res =>{
      this.maxbowl = res["stat"];
      console.log("Hello");
    })
  }

}
