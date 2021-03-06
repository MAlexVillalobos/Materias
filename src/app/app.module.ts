import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { PyEPage } from '../pages/py-e/py-e';
import { MiPage } from '../pages/mi/mi';
import { CsPage } from '../pages/cs/cs';
import { ComPage } from '../pages/com/com';
import { PappsPage } from '../pages/papps/papps';
import { RobPage } from '../pages/rob/rob';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    PyEPage,
    MiPage,
    CsPage,
    ComPage,
    PappsPage,
    RobPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    PyEPage,
    MiPage,
    CsPage,
    ComPage,
    PappsPage,
    RobPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
