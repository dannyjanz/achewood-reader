import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArchivePage } from '../archive/archive';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  showArchives() {
    this.navCtrl.push(ArchivePage)
  }

}
