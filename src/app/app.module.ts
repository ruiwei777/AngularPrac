import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// temporary in-memory-web--api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './hero.service';
import { VoterComponent } from './voter/voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    declarations:  [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,
        VoterComponent,
        VoteTakerComponent,
    ],

    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }


