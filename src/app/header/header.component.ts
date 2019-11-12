import { Component, OnInit, ViewChild, ElementRef, NgZone, AfterViewInit  } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { LoginService } from 'app/login.service';
import { CitiesModalComponent } from 'app/cities-modal/cities-modal.component';
import { CookieService } from 'ngx-cookie-service';
// import {} from '@types/googlemaps';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
 
  //  ngAfterViewInit() {
  //   this.cities = this.citiesModal.city;
  //   console.log("on init" + this.cities);
  // }

  loginState:boolean=false;

  dislplayNav = false;
   city:any;
  latitude: number;
  longitude: number;
  zoom: number;
  address: string ;
  
  private geoCoder;
  cookievalue:any;
  
 
  @ViewChild('search',{read: true, static: false })
  public searchElementRef: ElementRef;

  @ViewChild(CitiesModalComponent,{static:false})
  citiesModal : CitiesModalComponent;


  
  
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private loginServ:LoginService, private cookieservice : CookieService) { }

  displaySideNavbar(){
    console.log(this.dislplayNav);
   if(this.dislplayNav)
     this.dislplayNav=false;
     else
     this.dislplayNav=true;
   
  }

  isLogged(){
    if(this.loginServ.isLoggedIn){
      console.log("hshwch")
      this.loginState=true;

    }
    else{
      this.loginState=false;
    }
  }
 
  ngOnInit() {
    this.isLogged();  //for login and dashboard switch
     this.cookieservice.set('location','cities');
     this.cookievalue = this.cookieservice.get('location');
     console.log(this.cookievalue);

    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }
 
 
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }
 
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
    });
  }
  selectBengaluru() {

    this.city="Bengaluru,India";
    
    
    
    this.focusBengaluru();
    this.unfocusDelhi();
    this.unfocusHyderabad();
    this.unfocusMumbai();
    this.unfocusPune();

  }

  selectMumbai() {
    this.city="Mumbai,India";
    this.focusMumbai();
    this.unfocusDelhi();
    this.unfocusHyderabad();
    this.unfocusBengaluru();
    this.unfocusPune();

  }

  selectPune() {
    this.city="Pune,India";
    this.focusPune();
    this.unfocusMumbai();
    this.unfocusDelhi();
    this.unfocusHyderabad();
    this.unfocusBengaluru()
  }

  selectHyderabad(){
    this.city="Hyderabadh,India"
    this.focusHyderabad();
    this.unfocusMumbai();
    this.unfocusDelhi();
    this.unfocusPune();
    this.unfocusBengaluru()

  }

  selectDelhi() {
    this.city="Delhi,India";
    this.focusDelhi();
    this.unfocusMumbai();
    this.unfocusHyderabad();
    this.unfocusPune();
    this.unfocusBengaluru()
  }

  focusBengaluru(){
    document.getElementById("bengaluruCity").style.background = "#3aa5c5";
    document.getElementById("bengaluruCity").style.color = "white";
  }
  unfocusBengaluru(){
    document.getElementById("bengaluruCity").style.background = "white";
    document.getElementById("bengaluruCity").style.color = "black";
  }
  focusMumbai(){
    document.getElementById("mumbaiCity").style.background = "#3aa5c5";
    document.getElementById("mumbaiCity").style.color = "white";
  }
  unfocusMumbai(){
    document.getElementById("mumbaiCity").style.background = "white";
    document.getElementById("mumbaiCity").style.color = "black";
  }
  focusPune(){
    document.getElementById("puneCity").style.background = "#3aa5c5";
    document.getElementById("puneCity").style.color = "white";
  }
  unfocusPune(){
    document.getElementById("puneCity").style.background = "white";
    document.getElementById("puneCity").style.color = "black";
  }

  focusDelhi(){
    document.getElementById("delhiCity").style.background = "#3aa5c5";
    document.getElementById("delhiCity").style.color = "white";
  }
  unfocusDelhi(){
    document.getElementById("delhiCity").style.background = "white";
    document.getElementById("delhiCity").style.color = "black";
  }

  focusHyderabad(){
    document.getElementById("hyderabadCity").style.background = "#3aa5c5";
    document.getElementById("hyderabadCity").style.color = "white";
  }
  unfocusHyderabad(){
    document.getElementById("hyderabadCity").style.background = "white";
    document.getElementById("hyderabadCity").style.color = "black";
  }

  closeModal(){
    $('#locationModal').modal('hide');
  }
  }




