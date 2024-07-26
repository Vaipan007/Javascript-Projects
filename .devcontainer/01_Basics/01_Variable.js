const accountID='753159';
let account_name="Vaibhav Pandey"
var account_email="vaipan007@gmail.com"
account_city='Varanasi'
//console.log(accointID);//
//accountID='456654'//
console.log(accountID);/*accountID variable is defined under const which doesn.t allow 
change its valye that's why this error is showing:-TypeError: Assignment to constant variable. */
console.table([accountID,account_name,account_email,account_city])//console.table will create table//
account_email='psatya.pandey@gmail.com'
console.table([accountID,account_name,account_email,account_city])/*ye email change karke tab table banayega */
let account_State;/*Agar variable deke uski value nahi de rahe toh JS usko undefined consider karta hai */
console.table([accountID,account_name,account_email,account_city,account_State]);

