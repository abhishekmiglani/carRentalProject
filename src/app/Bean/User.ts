export class User {
    fullName: string;
    userId: number;
    email: string;
    phone: string;
    frontLicenseImageUrl: string;
    backLicenseImageUrl: string;
    password: string;

    constructor(userId){
        this.userId =userId;
    }

}