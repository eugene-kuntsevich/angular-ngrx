import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UserService } from './services/user.service';
import { ConfigEffects } from './store/effects/config.effects';
import { UserEffects } from './store/effects/user.effects';

import { appReducers } from './store/reducers/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
