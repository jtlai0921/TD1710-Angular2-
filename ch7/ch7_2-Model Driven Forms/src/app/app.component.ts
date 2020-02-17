import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form;

  // 預設Email驗證規則  
  pattern = '^[a-z_0-9.-]{1,64}@([a-z0-9-]{1,200}.){1,5}[a-z]{1,6}$';
  originEmailPattern = Validators.pattern(this.pattern);

  // 點擊訂閱改變Email驗證規則  
  checkSubscription() {
    if (this.form.controls.subscription.value) {
      this.form.controls.email.setValidators(
        [this.originEmailPattern, Validators.required]
      );
    }
    else {
      this.form.controls.email.setValidators(
        [this.originEmailPattern]
      );
    }
    this.form.controls.email.updateValueAndValidity();
  }

  // Form 表單 Model  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      account: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required]],
      personal: this.fb.group({
        name: ['', [Validators.required]],
        gender: '',
        birthday: ''
      }),
      subscription: false,
      email: ['', [this.originEmailPattern]]
    });
  }

  //前略  
  reset() {
    this.form.reset();
    this.checkSubscription();
  }


}
