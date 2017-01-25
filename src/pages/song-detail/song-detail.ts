import { Component, ViewChild } from '@angular/core';
import { NavParams, Slides } from 'ionic-angular';

@Component({
	selector: 'page-song-detail',
	templateUrl: 'song-detail.html'
})

export class SongDetailPage {
	@ViewChild(Slides) slides: Slides;
	song: any;
	currentSlideIndex: number;

	constructor(private navParams: NavParams){
		// If we navigated to this page, we will have an item available as a nav param
		this.song = navParams.get('song');
		this.currentSlideIndex = 0;
	}

	slideChanged(){
		this.currentSlideIndex = this.slides.getActiveIndex();
		console.log("Current index is", this.currentSlideIndex);
	}
}