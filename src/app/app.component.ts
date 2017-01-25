import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SongsListPage } from '../pages/songs-list/songs-list';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav:  Nav;
	// make SongsList the root (or first) page
	rootPage = SongsListPage;
	pages: Array<{iconName: string, title: string, component: any}>;

	constructor(public platform: Platform, public menu: MenuController) {
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ iconName: 'musical-notes', title: 'Songs list', component: SongsListPage }
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
			Splashscreen.hide();
		});
	}

	openPage(page) {
		// close the menu when clicking a link from the menu
		this.menu.close();
		// navigate to the new page if it is not the current page
		this.nav.setRoot(page.component);
	}
}
