import { Component, OnInit } from '@angular/core';
import { GetusersService } from '../../getusers.service';

@Component({
  selector: 'app-newusers',
  templateUrl: './newusers.component.html',
  styleUrls: ['./newusers.component.css']
})
export class NewusersComponent implements OnInit {
  public users = [];
  public errorMsg;
  constructor(private _geteventsservice:GetusersService) { }

  ngOnInit() {
    debugger;
    this._geteventsservice.getUsers()
      .subscribe(data => this.users = data,
                error => this.errorMsg = error);
  }

}
