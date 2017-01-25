import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
	selector: 'page-statistic-song-level',
	templateUrl: 'statistics-song-level.html'
})

export class StatisticSongLevelPage {
	song: any;
	level: {mode: string, number:number};
	scoresFromLevel: Array<any>;
	constructor(private navParams: NavParams){
		this.song = this.navParams.get('song');
		this.level = {
			mode: this.navParams.get('mode'),
			number: this.navParams.get('level')
		};
		this.scoresFromLevel = [
			{
				grade: 'A',
				judgment: 'HJ',
				perfects: 862,
				greats: 43,
				goods: 2,
				bads: 0,
				misses: 1,
				finalScore: 4230987
			},
			{
				grade: 'F',
				judgment: 'HJ',
				perfects: 862,
				greats: 102,
				goods: 78,
				bads: 45,
				misses: 231,
				finalScore: 4230987
			},
			{
				grade: 'B',
				judgment: 'HJ',
				perfects: 862,
				greats: 43,
				goods: 2,
				bads: 0,
				misses: 67,
				finalScore: 89230987
			},
			{
				grade: 'A',
				judgment: 'HJ',
				perfects: 862,
				greats: 43,
				goods: 2,
				bads: 2,
				misses: 19,
				finalScore: 4230987
			},
			{
				grade: 'C',
				judgment: 'HJ',
				perfects: 862,
				greats: 43,
				goods: 21,
				bads: 12,
				misses: 45,
				finalScore: 6730987
			}
		]
	}
}