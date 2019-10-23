import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-select',
  templateUrl: './car-select.component.html',
  styleUrls: ['./car-select.component.css']
})
export class CarSelectComponent implements OnInit {

  flag : boolean = false;
  hatchbackFilter : boolean = false;
  sedanFilter : boolean = false;
  suvFilter : boolean = false;
  miniSUVFilter : boolean = false;
  autoTransmissionFilter : boolean = false;
  manualTransmissionFilter : boolean = false;
  petrolFilter : boolean = false;
  dieselFilter : boolean = false;


  carsList = ["Suzuki Baleno","Swift DZire","Honda City","Honda Civic","Toyota Fortuner"]

  constructor() { }

  ngOnInit() {
  }

  filter60Color(){
    document.getElementById('60km').style.backgroundColor = 'MediumAquamarine';
    document.getElementById('120km').style.backgroundColor = 'white';
    document.getElementById('180km').style.backgroundColor = 'white';
  }

  filter120Color(){
    document.getElementById('60km').style.backgroundColor = 'white';
    document.getElementById('120km').style.backgroundColor = 'MediumAquamarine';
    document.getElementById('180km').style.backgroundColor = 'white';
  }

  filter180Color(){
    document.getElementById('60km').style.backgroundColor = 'white';
    document.getElementById('120km').style.backgroundColor = 'white';
    document.getElementById('180km').style.backgroundColor = 'MediumAquamarine';
  }

  onWithoutFuelSelect(){
    this.flag = false;
    document.getElementById('withoutFuel').style.backgroundColor = 'MediumAquamarine';
    document.getElementById('withFuel').style.backgroundColor = 'white';

  }

  onWithFuelSelect(){
    this.flag = true;
    document.getElementById('withFuel').style.backgroundColor = 'MediumAquamarine';
    document.getElementById('withoutFuel').style.backgroundColor = 'white';

  }

  toggleHatchback(){
    if(this.hatchbackFilter){
      this.hatchbackFilter = false;
      document.getElementById('hatchback').style.backgroundColor = 'white';
    }
    else{
      this.hatchbackFilter = true;
      document.getElementById('hatchback').style.backgroundColor = 'MediumAquamarine';
    }
  }

  hideHatchback(){
    this.hatchbackFilter = false;
    document.getElementById('hatchback').style.backgroundColor = 'white';
  }

  toggleSedan(){
    if(this.sedanFilter){
      this.sedanFilter = false;
      document.getElementById('sedan').style.backgroundColor = 'white';
    }
    else{
      this.sedanFilter = true;
      document.getElementById('sedan').style.backgroundColor = 'MediumAquamarine';
    }
  }

  hideSedan(){
    this.sedanFilter = false;
    document.getElementById('sedan').style.backgroundColor = 'white';
  }

  toggleSUV(){
    if(this.suvFilter){
      this.suvFilter = false;
      document.getElementById('suv').style.backgroundColor = 'white';
    }
    else{
      this.suvFilter = true;
      document.getElementById('suv').style.backgroundColor = 'MediumAquamarine';
    }
  }

  hideSUV(){
    this.suvFilter = false;
    document.getElementById('suv').style.backgroundColor = 'white';
  }

  toggleMiniSUV(){
    if(this.miniSUVFilter){
      this.miniSUVFilter = false;
      document.getElementById('miniSuv').style.backgroundColor = 'white';
    }
    else{
      this.miniSUVFilter = true;
      document.getElementById('miniSuv').style.backgroundColor = 'MediumAquamarine';
    }
  }

  hideMiniSUV(){
    this.miniSUVFilter = false;
    document.getElementById('miniSuv').style.backgroundColor = 'white';
  }

  displayPetrol(){
    this.petrolFilter = true;
    this.dieselFilter = false;
    document.getElementById('petrol').style.backgroundColor = 'MediumAquamarine';
    document.getElementById('diesel').style.backgroundColor = 'white';
  }

  hidePetrol(){
    this.petrolFilter = false;
    document.getElementById('petrol').style.backgroundColor = 'white';
  }

  displayDiesel(){
    this.petrolFilter = false;
    this.dieselFilter = true;
    document.getElementById('diesel').style.backgroundColor = 'MediumAquamarine';
    document.getElementById('petrol').style.backgroundColor = 'white';
  }
  hideDiesel(){
    this.dieselFilter = false;
    document.getElementById('diesel').style.backgroundColor = 'white';
  }
  displayManual(){
    this.manualTransmissionFilter = true;
    this.autoTransmissionFilter = false;
    document.getElementById('manual').style.backgroundColor = 'MediumAquamarine';
    document.getElementById('automatic').style.backgroundColor = 'white';
  }
  hideManual(){
    this.manualTransmissionFilter = false;
    document.getElementById('manual').style.backgroundColor = 'white';
  }

  displayAutomatic(){
    this.autoTransmissionFilter = true;
    this.manualTransmissionFilter = false;
    document.getElementById('manual').style.backgroundColor = 'white';
    document.getElementById('automatic').style.backgroundColor = 'MediumAquamarine';
  }
  hideAutomatic(){
    this.autoTransmissionFilter = false;
    document.getElementById('automatic').style.backgroundColor = 'white';
  }
  clearAll(){
    this.hideAutomatic();
    this.hideDiesel();
    this.hideHatchback();
    this.hideManual();
    this.hideMiniSUV();
    this.hidePetrol();
    this.hideSUV();
    this.hideSedan();
  }

}
