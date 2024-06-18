//basic syntax
/*switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
const month="jan";
switch (month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;
    default:
        break;
}
//break is used to break control flow if there will not be break it will print everything after the key matches with value except default value

//for string
switch (month){
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "mar":
        console.log("March");
        break;
    default:
        break;
}