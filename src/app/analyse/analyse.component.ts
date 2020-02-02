import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { ChartSelectEvent } from 'ng2-google-charts';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})

export class AnalyseComponent implements OnInit {
  [x: string]: any;
  teamNames;
  teamName;
  players;
  pieChart: GoogleChartInterface;
  tableChart:GoogleChartInterface;



  constructor(private iplservice: IplService) { }

  ngOnInit() {
    this.iplservice.teamLabels().subscribe(res => {
      this.teamNames = res['labels'];

    })
  }

  getPlayers(event) {
    this.teamName = event.target.value;
    if (this.teamName) {
      this.iplservice.getPlayersByTeamName(this.teamName)
        .subscribe(res => {
          this.players = res["players"];
        })

      this.iplservice.getTeamRoleStat(this.teamName)
        .subscribe(res => {
          let stat = res["stat"];
          let data = []
          data.push(["Role", "Count"]);
          for (let s of stat) {
            data.push([s["role"], s["count"]]);

          }
          this.showRoleStatChart(data);
        })
    }
  }

  showRoleStatChart(data) {
    this.pieChart = {
      chartType: "PieChart",
      dataTable: data,
      options: {
        'Role': 'Count',
        'height': 600,
        'width': 700
      }
    }
  }

  //On Chart Select
  onChartSelect(event:ChartSelectEvent){
    let role = event.selectedRowFormattedValues[0];
    this.iplservice.getPlayerByTeamAndRole(this.teamName,role).subscribe(
      res=>{
        let stat = res["players"];
        let data = []
        data.push(["Name", "Team" , "Role" , "Price"]);
        for (let s of stat) {
          data.push([s["player"],s["label"],s["role"] , s["price"]]);

        }
        this.showchartTable(data);
      })
  }

  showchartTable(data){
    this.tableChart = {
      chartType: "Table",
      dataTable: data,
    }
  }
}





