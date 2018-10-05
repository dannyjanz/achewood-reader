import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ArchiveProvider } from '../../providers/archive/archive';
import { Comic } from '../../providers/comic';


@Component({
  selector: 'page-archive',
  templateUrl: 'archive.html',
})
export class ArchivePage {

  public comics : Comic[] = []

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public archiveService: ArchiveProvider) {

  }

  ionViewDidLoad() {
    let parser = new DOMParser();

    this.archiveService.loadArchivePage().subscribe(comics => {
      console.log(comics);
      this.comics = comics;
    });

    console.log('ionViewDidLoad ArchivePage');
  }

  



}
