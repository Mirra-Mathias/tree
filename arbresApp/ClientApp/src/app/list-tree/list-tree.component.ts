import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

export interface Tree {
  "datasetid": string,
  "recordid": string,
  "fields": {
    "libellefrancais": string,
    "circonferenceencm": number,
    "hauteurenm": number,
    "stadedeveloppement": string,
    "dateplantation": Date
  },
  "domanialite": string
}

@Component({
  selector: 'app-list-tree',
  templateUrl: './list-tree.component.html',
  styleUrls: ['./list-tree.component.css']
})
export class ListTreeComponent implements OnInit {
  public trees: Tree[];
  http: HttpClient;
  @Inject('BASE_URL') baseUrl: string
  public nameSelected: string;
  public isSortedAsc: boolean;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tree[]>(baseUrl + 'tree').subscribe(result => {
      this.trees = result;
    }, error => console.error(error));
  }

  ngOnInit() {
    this.nameSelected = '';
    this.isSortedAsc = true;
  }

  filterByName() {
    this.http.get<Tree[]>(this.baseUrl + 'tree/filterName/' + this.nameSelected).subscribe(result => {
      this.trees = result;
    }, error => console.error(error));
  }

  filterSort(){
    if(this.isSortedAsc){
      this.http.get<Tree[]>(this.baseUrl + 'tree/trier/desc').subscribe(result => {
        this.trees = result;
      }, error => console.error(error));
      this.isSortedAsc = false;
    }
    else {
      this.http.get<Tree[]>(this.baseUrl + 'tree/trier/asc').subscribe(result => {
        this.trees = result;
      }, error => console.error(error));
      this.isSortedAsc = true;
    }
  }

}
