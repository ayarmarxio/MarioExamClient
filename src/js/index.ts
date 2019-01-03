import axios, {
    AxiosResponse,
    AxiosError,
} from "../../node_modules/axios/index";

import { json2table100 } from "./generictable";

let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("first-btn");
btn.addEventListener("click", firstFunction );


function firstFunction () {

}
// more advanced object, including nested objects (and double nested objects)
interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    company: { name: string; catchPhrase: string; bs: string };
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; long: string };
}

axios.get<IUser[]>("http://jsonplaceholder.typicode.com/users")
    .then(function (response: AxiosResponse<IUser[]>): void {
        let data: IUser[] = response.data;
        console.log(data);
        let result: string = json2table100(response.data);
        console.log(result);
        let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
        element.innerHTML = result;
    })
    .catch(function (error: AxiosError): void {
        console.log(JSON.stringify(error));
    });


