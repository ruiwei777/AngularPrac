import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  @Input() name: string;
  @Output() onVoted = new EventEmitter();
  voted : boolean;

  constructor() { }

  ngOnInit() {
    this.voted = false;
  }

  vote(result: boolean){
    this.onVoted.emit({result, name: this.name});
    this.voted = true;
  }
}
