import { Component, ViewChild } from '@angular/core';
import { NavParams, Slides, NavController } from 'ionic-angular';
import { StatisticSongLevelPage } from '../statistics-song-level/statistics-song-level';

@Component({
	selector: 'page-song-detail',
	templateUrl: 'song-detail.html'
})

export class SongDetailPage {
	@ViewChild(Slides) slides: Slides;
	song: any;
	currentSlideIndex: number;

	constructor(private navParams: NavParams, private navCtrl: NavController){
		// If we navigated to this page, we will have an item available as a nav param
		this.song = navParams.get('song');
		this.currentSlideIndex = 0;
	}

	slideChanged(){
		this.currentSlideIndex = this.slides.getActiveIndex();
	}

	levelTapped(event, song, level, mode){
		this.navCtrl.push(StatisticSongLevelPage, {
			song: song,
			level: level,
			mode: mode
		});
	}
}