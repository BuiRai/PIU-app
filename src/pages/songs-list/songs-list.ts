import { Component } from '@angular/core';

@Component({
	templateUrl: 'songs-list.html'
})

export class SongsListPage {
	songs: Array<any>;
	constructor(){
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
}