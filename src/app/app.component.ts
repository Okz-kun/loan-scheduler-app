import { Component } from '@angular/core';
import { Inputs } from 'src/models/input-model';
import { Sched } from 'src/models/loan-sched-model';
import { LoanService } from 'src/service/loan-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loan-scheduler-app';
  results?: Sched[];

  sellingPrice: number = 0;
  reservationDate: Date = new Date;
  equityTerm: number = 0;


  constructor(private loanService: LoanService) { }

  generateResult() {
    const inputs: Inputs = {
      sellingPrice: this.sellingPrice,
      reservationDate: this.reservationDate,
      equityTerm: this.equityTerm
    }
    this.loanService.calculateLoan(inputs).subscribe(data => {
      this.results = data;
    });
  }
}
