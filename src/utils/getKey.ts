import { citiesCode } from "./citiesCode";

export function getKey(value: string) {
    let key = Object.keys(citiesCode).find(key => citiesCode[key] === value) || "";

    if (key) {
        switch (key) {
            case "충남":
                key = "충청남도";
                break;
            case "충북":
                key = "충청북도";
                break;
            case "전북":
                key = "전라북도";
                break;
            case "경북":
                key = "경상북도";
                break;
            case "전남":
                key = "전라남도";
                break;
            case "경남":
                key = "경상남도";
                break;
            default:
                break;
        }
    }
    return key
}
