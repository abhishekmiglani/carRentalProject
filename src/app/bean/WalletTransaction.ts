import { Wallet } from './Wallet';

export class WalletTransaction{
    transactionId:number;
	transactionType:String;
	transactionAmount:number;
	transactionDate:Date;
	wallet:Wallet;
	transactionDetail:String;
}