import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Inject } from '@angular/core';
// import{ TranslateService} from '@ngx-translate/core';


=======
>>>>>>> parent of 004ac98... Revert "Merge branch 'master' of https://github.com/abhishekmiglani/carRentalProject"
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(@Inject(TranslateService) public translate: TranslateService) {
    translate.addLangs(['en','fr','de','hi','pj'])
    translate.setDefaultLang('en');
    translate.use('en');
}




  ngOnInit() {
  }

}
