import { Component, OnInit } from '@angular/core';
import {PerduService} from "./perdu.service";

@Component({
  selector: 'app-perdu',
  templateUrl: './perdu.component.html',
  styleUrls: ['./perdu.component.css']
})
export class PerduComponent implements OnInit {
  private _children;

  constructor(private _perduService: PerduService) { }

  ngOnInit() {
    this._perduService.getChildren()
      .then(response => {
        this._children = Object.assign(new Object(), response.json());
        console.log("children ",this._children)
      })
      .catch(error => console.log(error));
  }

}
