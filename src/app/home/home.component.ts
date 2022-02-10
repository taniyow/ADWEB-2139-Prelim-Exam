import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //String Interpolation
  brand = "Research Conferences";

  //Property Binding Images
  hero:string ="../../assets/img/toronto.jpg";
  imgFrance:string ="../../assets/img/france.jpg";
  imgSeoul:string ="../../assets/img/seoul.jpg";
  imgSanfrancisco:string ="../../assets/img/sanfrancisco.jpg";
  imgBoston:string ="../../assets/img/boston.jpg";

  //Class Binding
  branding = "display-5 fw-bold lh-1 mb-3";
  heroSubheading = "h5 mb-4";

  //Style Binding
  cardStyling = "width: 16rem; height: 31.75rem";
  linkStyle = "none";
  cards = "margin-bottom: 2rem;";

  constructor() { }

  ngOnInit(): void {
  }

}
