import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-project',
  templateUrl: './init-project.component.html',
  styleUrls: ['./init-project.component.css']
})
export class InitProjectComponent implements OnInit {

  cliValue = "init";
  constructor() { }

  ngOnInit(): void {
  }

}
