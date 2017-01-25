import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SongsListPage } from '../pages/songs-list/songs-list';
import { SongDetailPage } from '../pages/song-detail/song-detail';

@NgModule({
  declarations: [
    MyApp,
    SongsListPage,
    SongDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SongsListPage,
    SongDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
