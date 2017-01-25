import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SongDetailPage } from '../song-detail/song-detail';

@Component({
	templateUrl: 'songs-list.html'
})

export class SongsListPage {
	songs: Array<any>;
	constructor(public navCtrl: NavController){
		this.songs = [];
		for (var i = 0; i < 10; ++i) {
			this.songs.push({
				title: 'God Mode',
				artist: 'Nato',
				bpm: 152,
				banner: 'assets/images/godMode.jpg'
			});
		}
	}

	itemTapped(event, song){
		this.navCtrl.push(SongDetailPage, {
			song: song
		});
	}
}