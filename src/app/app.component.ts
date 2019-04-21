import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {	
	page = 'add'

	note = {title:'',subtitle:'',content:''}

	notes = [
		{title:'First',subtitle:'Sub something',content:'Content body'},
		{title:'Second',subtitle:'Note subitlte',content:'Lorem Ipsum '},
		{title:'Soraya é chata',subtitle:'Note subitlte',content:'Lorem Ipsum '},
		{title:'Naldo briga',subtitle:'Note subitlte',content:'Lorem Ipsum '},
		{title:'Calebe é viado muito mesmo',subtitle:'demais',content:'Lorem Ipsum '}
	]		

	addNote() {
		this.notes.push(this.note)		
	}	
	
	btnAdd(){
		this.page = 'add'			
	}	
	btnList(){
		this.page = 'list'			
	}
}