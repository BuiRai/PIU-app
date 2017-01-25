import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SongsListPage } from '../pages/songs-list/songs-list';
import { SongDetailPage } from '../pages/song-detail/song-detail';
import { StatisticSongLevelPage } from '../pages/statistics-song-level/statistics-song-level';

@NgModule({
  declarations: [
    MyApp,
    SongsListPage,
    SongDetailPage,
    StatisticSongLevelPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SongsListPage,
    SongDetailPage,
    StatisticSongLevelPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
