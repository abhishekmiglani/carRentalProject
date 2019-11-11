import { Component, OnInit } from "@angular/core";
import { GetCarsService } from 'app/get-cars.service';

declare var $: any;
@Component({
  selector: "app-car-select",
  templateUrl: "./car-select.component.html",
  styleUrls: ["./car-select.component.css"]
})
export class CarSelectComponent implements OnInit {
  flag: boolean = false;
  hatchbackFilter: boolean = false;
  sedanFilter: boolean = false;
  suvFilter: boolean = false;
  miniSUVFilter: boolean = false;
  autoTransmissionFilter: boolean = false;
  manualTransmissionFilter: boolean = false;
  petrolFilter: boolean = false;
  dieselFilter: boolean = false;

  transmissionType:string="";
  fuelType:string="";
  carType:string[]=[];
  
  public cars = [];

  carsList = [
    "Suzuki Baleno",
    "Swift DZire",
    "Honda City",
    "Honda Civic",
    "Toyota Fortuner",
    "Hyundai Verna"
  ];
  duplicateCarList: any[];
  carList:any[]=[];

  constructor(private getCarsService:GetCarsService) {}
  
  ngOnInit() {


    $(function() {
      $("#sortMenu a").click(function() {
        console.log("Hey!");
        $("#selected").text($(this).text());
        $("#selected").val($(this).text());
      });
    });

    this.getCarsService.getCars()
    .subscribe(data => this.cars = data);
  }

  filter60Color() {
    document.getElementById("60km").style.backgroundColor = "#3aa5c5";
    document.getElementById("60km").style.color = "white";
    document.getElementById("120km").style.backgroundColor = "white";
    document.getElementById("120km").style.color = "black";
    document.getElementById("180km").style.backgroundColor = "white";
    document.getElementById("180km").style.color = "black";
  }

  filter120Color() {
    document.getElementById("60km").style.backgroundColor = "white";
    document.getElementById("120km").style.backgroundColor = "#3aa5c5";
    document.getElementById("120km").style.color = "white";
    document.getElementById("180km").style.backgroundColor = "white";
    document.getElementById("60km").style.color = "black";
    document.getElementById("180km").style.color = "black";
  }

  filter180Color() {
    document.getElementById("60km").style.backgroundColor = "white";
    document.getElementById("180km").style.backgroundColor = "#3aa5c5";
    document.getElementById("180km").style.color = "white";
    document.getElementById("120km").style.backgroundColor = "white";
    document.getElementById("60km").style.color = "black";
    document.getElementById("120km").style.color = "black";
  }

  onWithoutFuelSelect() {
    this.flag = false;
    document.getElementById("withoutFuel").style.backgroundColor = "#3aa5c5";
    document.getElementById("withoutFuel").style.color = "white";
    document.getElementById("withFuel").style.backgroundColor = "white";
    document.getElementById("withFuel").style.color = "black";
  }

  onWithFuelSelect() {
    this.flag = true;
    document.getElementById("withFuel").style.backgroundColor = "#3aa5c5";
    document.getElementById("withFuel").style.color = "white";
    document.getElementById("withoutFuel").style.backgroundColor = "white";
    document.getElementById("withoutFuel").style.color = "black";
  }

  toggleHatchback() {
    if (this.hatchbackFilter) {
      this.hatchbackFilter = false;
      
      var  indexType=this.carType.indexOf("Hatchback");
      this.carType.splice(indexType,1);
      document.getElementById("hatchback").style.backgroundColor = "white";
      document.getElementById("hatchback").style.color = "black";
    } else {
      this.hatchbackFilter = true;
      this.carType.push("Hatchback");
      document.getElementById("hatchback").style.backgroundColor = "#3aa5c5";
      document.getElementById("hatchback").style.color = "white";
    }
  }

  hideHatchback() {
    this.hatchbackFilter = false;
    document.getElementById("hatchback").style.backgroundColor = "white";
    document.getElementById("hatchback").style.color = "black";
  }

  toggleSedan() {
    if (this.sedanFilter) {
      
      var  indexType=this.carType.indexOf("Sedan");
      this.carType.splice(indexType,1);
      this.sedanFilter = false;
      document.getElementById("sedan").style.backgroundColor = "white";
      document.getElementById("sedan").style.color = "black";
    } else {
      this.sedanFilter = true;
      this.carType.push("Sedan");
      document.getElementById("sedan").style.backgroundColor = "#3aa5c5";
      document.getElementById("sedan").style.color = "white";
    }
  }

  hideSedan() {
    this.sedanFilter = false;
    document.getElementById("sedan").style.backgroundColor = "white";
    document.getElementById("sedan").style.color = "black";
  }

  toggleSUV() {
    if (this.suvFilter) {
      
      var  indexType=this.carType.indexOf("SUV");
      this.carType.splice(indexType,1);
      this.suvFilter = false;
      document.getElementById("suv").style.backgroundColor = "white";
      document.getElementById("suv").style.color = "black";
    } else {
      this.suvFilter = true;
      this.carType.push("SUV");
      document.getElementById("suv").style.backgroundColor = "#3aa5c5";
      document.getElementById("suv").style.color = "white";
    }
  }

  hideSUV() {
    this.suvFilter = false;
    document.getElementById("suv").style.backgroundColor = "white";
    document.getElementById("suv").style.color = "black";
  }

  toggleMiniSUV() {
    if (this.miniSUVFilter) {
      var  indexType=this.carType.indexOf("Mini SUV");
      this.carType.splice(indexType,1);
      this.miniSUVFilter = false;
      document.getElementById("miniSuv").style.backgroundColor = "white";
      document.getElementById("miniSuv").style.color = "black";
    } else {
      this.miniSUVFilter = true;
      this.carType.push("Mini SUV");
     
      document.getElementById("miniSuv").style.backgroundColor = "#3aa5c5";
      document.getElementById("miniSuv").style.color = "white";
    }
  }

  hideMiniSUV() {
    this.miniSUVFilter = false;
    document.getElementById("miniSuv").style.backgroundColor = "white";
    document.getElementById("miniSuv").style.color = "black";
  }

  displayPetrol() {
    this.petrolFilter = true;
    this.dieselFilter = false;
    this.fuelType="Petrol";
    document.getElementById("petrol").style.backgroundColor = "#3aa5c5";
    document.getElementById("petrol").style.color = "white";
    document.getElementById("diesel").style.backgroundColor = "white";
    document.getElementById("diesel").style.color = "black";
  }

  hidePetrol() {
    this.petrolFilter = false;
    document.getElementById("petrol").style.backgroundColor = "white";
    document.getElementById("petrol").style.color = "black";
  }

  displayDiesel() {
    this.petrolFilter = false;
    this.dieselFilter = true;
    this.fuelType="Diesel";
    document.getElementById("diesel").style.backgroundColor = "#3aa5c5";
    document.getElementById("diesel").style.color = "white";
    document.getElementById("petrol").style.backgroundColor = "white";
    document.getElementById("petrol").style.color = "black";
  }

  hideDiesel() {
    this.dieselFilter = false;
    document.getElementById("diesel").style.backgroundColor = "white";
    document.getElementById("diesel").style.color = "black";
  }
  displayManual() {
    this.manualTransmissionFilter = true;
    this.autoTransmissionFilter = false;
    this.transmissionType="Manual";
    document.getElementById("manual").style.backgroundColor = "#3aa5c5";
    document.getElementById("manual").style.color = "white";
    document.getElementById("automatic").style.backgroundColor = "white";
    document.getElementById("automatic").style.color = "black";
  }
  hideManual() {
    this.manualTransmissionFilter = false;
    document.getElementById("manual").style.backgroundColor = "white";
    document.getElementById("manual").style.color = "black";
  }

  displayAutomatic() {
    this.autoTransmissionFilter = true;
    this.manualTransmissionFilter = false;
    this.transmissionType="Automatic";
    document.getElementById("manual").style.backgroundColor = "white";
    document.getElementById("manual").style.color = "black";
    document.getElementById("automatic").style.backgroundColor = "#3aa5c5";
    document.getElementById("automatic").style.color = "white";
  }

  hideAutomatic() {
    this.autoTransmissionFilter = false;
    document.getElementById("automatic").style.backgroundColor = "white";
    document.getElementById("automatic").style.color = "black";
  }

  clearAll() {
    this.hideAutomatic();
    this.hideDiesel();
    this.hideHatchback();
    this.hideManual();
    this.hideMiniSUV();
    this.hidePetrol();
    this.hideSUV();
    this.hideSedan();
  }

  filterApply(){
    console.log("aassss:"+this.carType.length)
    console.log("bassss:"+this.fuelType)
    console.log("cassss:"+this.transmissionType)
  }
}
