import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {

  voters: string[];
  results: number;
  lastVoterName: string;

  constructor() { }

  ngOnInit() {
    this.voters = ['Tom', 'Jack', 'David', 'Susan'];
    this.results = 0;
    this.lastVoterName = null;
  }

  onVoted($event: any){
    if($event.result){
      this.results += 1;
    } else {
      this.results -= 1;
    }

    this.lastVoterName = $event.name;
  }

}
