import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tree } from '../list-tree/list-tree.component'

@Component({
  selector: 'app-details-tree',
  templateUrl: './details-tree.component.html',
  styleUrls: ['./details-tree.component.css']
})
export class DetailsTreeComponent implements OnInit {
  currentRecordedId : string;
  public tree : Tree;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, route : ActivatedRoute) {
    this.currentRecordedId = route.snapshot.params.recordid;

    http.get<Tree>(baseUrl + 'tree/'+ this.currentRecordedId).subscribe(result => {
      this.tree = result;
    }, error => console.error(error));

  }

  ngOnInit() {

  }

}
