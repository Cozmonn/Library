import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environments';

@NgModule({
    imports:[
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ]
})export class AppModule { }