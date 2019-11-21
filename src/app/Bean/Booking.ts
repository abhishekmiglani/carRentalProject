import { User } from './User'
import { Car } from './Car';

    export interface Booking{
    
    bookingId : number;
	
	fromDate: string;
	
	tillDate : string;
	
	status : boolean;
		
	userDetails : User;
	
    car : Car;
    
    }