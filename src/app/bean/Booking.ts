import { User } from './User'
import { Car } from './Car';

    export interface Booking{
    
    bookingId : number;
	
	fromDate: Date;
	
    tillDate : Date;
    
    bookingDate : Date;
	
	status : boolean;
		
	userDetails : User;
	
    car : Car;
    
    }