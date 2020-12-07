import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '@app/Services/client.service';

@Component({
  selector: 'app-edit-add-client',
  templateUrl: './edit-add-client.component.html',
  styleUrls: ['./edit-add-client.component.css']
})
export class EditAddClientComponent implements OnInit {
  clientForm: FormGroup;
  inputDate="2013-01-08"
  inputPhonenumber=+216897345
  constructor(private router: Router, private formBuilder: FormBuilder,
    public clientService: ClientService, private arouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.initClientForm();
    this.initEditClient();
  }




  addOReditClient() {

    if (this.formControls.firstname.valid && this.formControls.lastname.valid
      && this.formControls.address && this.formControls.email.valid
      && this.formControls.registerDate.valid && this.formControls.phoneNumber.valid
      && this.formControls.zipcode.valid && this.formControls.city.valid) {
      this.clientService.subjectIsUpdate.value == true ?
        this.updateClient(this.clientService.subjectCurrentEditId.value) :
        this.addClient()
    }

  }


  // add client 
  addClient() {

    this.clientService.saveClient(this.clientForm.value).toPromise().then(

      rep => {
        console.log(rep)
        this.navigatetoAllClient()
      },
      error => {
        console.log(error)
      }

    )


  }

  //update client 
  updateClient(id: number) {

    this.clientService.updateClient(id, this.clientForm.value).toPromise().then(

      rep => {
        console.log(rep)
        this.navigatetoAllClient()
      },
      error => {
        console.log(error)
      }

    )


  }

  initClientForm() {
    this.clientForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      registerDate: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required]

    });
  }




  initEditClient() {
    this.arouter.paramMap.subscribe(params => {

      if (params.get('id') !== null) {
        {
          this.clientService.initEditClient(Number(params.get('id')));
          this.clientService.subjecttitleButton.next("Update Client");
          this.clientService.subjectIsUpdate.next(true);
          this.clientService.subjectCurrentEditId.next(Number(params.get('id')));
        }

      }
      else {
        {
          this.clientService.subjectClient.value.firstname= ""
          this.clientService.subjectClient.value.lastname= ""
          this.clientService.subjectClient.value.address= ""
          this.clientService.subjectClient.value.zipcode= undefined
          this.clientService.subjectClient.value.city= ""
          this.clientService.subjectClient.value.email= ""
          this.clientService.subjectClient.value.date.toDateString()

          this.clientService.subjecttitleButton.next("Add  Client");
          this.clientService.subjectIsUpdate.next(false);
        }

      }

    });
  }




  get formControls() {
    return this.clientForm.controls;
  }

  navigatetoAllClient() {
    this.router.navigateByUrl("/admin/all-client")

  }
 
}
