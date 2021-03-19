import { Component, OnInit, ViewChild } from '@angular/core';
//declare var jQuery:any;
declare var $:any; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public withSlider: number;
	public anchuraToSlider: number;
	public captions: boolean;
	public autor: any;

	@ViewChild('textos', {static: true}) textos;

  constructor() {
  	this.captions = true;
   }

  ngOnInit(){
  	//var opcion_clasica = alert(document.querySelector('#texto').innerHTML);
  	console.log(this.textos.nativeElement.textContent);
   
  }
  cargarSlider(){

  	this.anchuraToSlider = this.withSlider;

  }
  resetearSlider(){
  	this.anchuraToSlider =  null;
  }

  getAutor(event){
  	console.log(event);
  	this.autor = event;
  }

}
