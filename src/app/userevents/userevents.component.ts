import { Component, OnInit } from '@angular/core';
import { GeteventsService } from '../getevents.service';
import { DeleteeventsService } from '../deleteevents.service';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { ParticipantsService } from '../participants.service';
@Component({
  selector: 'app-userevents',
  templateUrl: './userevents.component.html',
  styleUrls: ['./userevents.component.css']
})
export class UsereventsComponent implements OnInit {
  public events = [];
  registrationForm: FormGroup;
  public errorMsg;
  submitted=false;
  returnUrl: string;
  constructor(private _geteventsservice:GeteventsService,  private formBuilder: FormBuilder,private _participantservice:ParticipantsService) { }

  ngOnInit() {
    this._geteventsservice.getEvents()
      .subscribe(data => this.events = data,
                error => this.errorMsg = error);

                this.registrationForm = this.formBuilder.group({
             
                     Title: ['', Validators.required],
                      Name: ['', Validators.required],
                     Email: ['', Validators.required],
                      Contact: ['', Validators.required],
                } )
                
            }
          
            get f() { return this.registrationForm.controls; }
            onSubmit()  {
              this.submitted = true;
          
              if (this.registrationForm.invalid) {
                return;
            }
          
            // display form values on success
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registrationForm.value, null, 4));
            alert("Thanks for joining");
              console.log(this.registrationForm.value);
              
              this._participantservice.register(this.registrationForm.value)
                .subscribe(
                
                  response => console.log('Success!', response),
                  error => console.error('Error!', error)
                );
            }
          
  }


