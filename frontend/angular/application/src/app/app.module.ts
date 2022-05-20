import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from   '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateTeamComponent } from './create-team/create-team.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { ShowTeamsComponent } from './show-teams/show-teams.component';
import { ShowplayersComponent } from './showplayers/showplayers.component';
import {Player} from './player'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegistrationComponent,
    CreateTeamComponent,
    CreatePlayerComponent,
    ShowTeamsComponent,
    ShowplayersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
