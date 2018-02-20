import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public movie = {
		title: '',
		releaseDate: '',
		language: '',
	};

	public movies: any = [];
  submit() {

		this.movies.push(this.movie);

		this.movie = {
			title: '',
			releaseDate: '',
			language: '',
		};
	}

	remove(i) {
		this.movies.splice(i, 1);
	}
}
