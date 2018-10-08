import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { PyEPage } from '../py-e/py-e';
import { MiPage } from '../mi/mi';
import { CsPage } from '../cs/cs';
import { ComPage } from '../com/com';
import { PappsPage } from '../papps/papps';
import { RobPage } from '../rob/rob';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Historia = HistoriaPage;
  Dibujo = DibujoPage;
  PyE = PyEPage;
  MI = MiPage;
  CS = CsPage;
  COM = ComPage;
  PAPPS = PappsPage;
  ROB = RobPage;

  constructor(public navCtrl: NavController) {

  }
  clickHistoria(){
    this.navCtrl.push(this.Historia);
  }

  clickDibujo(){
    this.navCtrl.push(this.Dibujo);
  }

  clickPYE(){
    this.navCtrl.push(this.PyE);
  }

  clickMI(){
    this.navCtrl.push(this.MI);
  }

  clickCS(){
    this.navCtrl.push(this.CS);
  }

  clickCOM(){
    this.navCtrl.push(this.COM);
  }

  clickPAPPS(){
    this.navCtrl.push(this.PAPPS);
  }

  clickROB(){
    this.navCtrl.push(this.ROB);
  }
}
