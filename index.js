function checkNum() {

let check_num = document.getElementById
("check_num").value; 
if(typeof check_num === "number") {
   console.log(check_num + " - это число");
} else {
   console.log(check_num + " - это не число");
}
};
