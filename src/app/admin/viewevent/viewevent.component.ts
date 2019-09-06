import { Component, OnInit } from '@angular/core';
import { GeteventsService } from '../../getevents.service';
import { DeleteeventsService } from '../../deleteevents.service';
import { GeteventbyidService } from '../../geteventbyid.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class VieweventComponent implements OnInit {
  public events = [];
  

  public errorMsg;
  constructor(private _geteventsservice:GeteventsService,
    private router:Router,
    private route:ActivatedRoute,
    private _deleteeventservice:DeleteeventsService,
    private _geteventbyid:GeteventbyidService) { }

  ngOnInit() {
    this._geteventsservice.getEvents()
      .subscribe(data => this.events = data,
                error => this.errorMsg = error);
  }
  ondelete(EventID) {
    if(confirm("Are you sure to delete this post")){
     this._deleteeventservice.delete(EventID)
       .subscribe(
      response => console.log('Success!', response),
       
    )
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
    
  }
  // onupdate(EventID){
  //   this._geteventbyid.getEvents(EventID)
  //     .subscribe(data => {
  //       this.router.navigateByUrl('/update');
  //       console.log(data);
  //     }
  //              );
  // }
}
