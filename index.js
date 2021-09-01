function checkNum() {

let check_num = document.getElementById
("check_num").value; 
if(typeof check_num === Number) {
   alert(check_num + " - это число");
} else {
   alert(check_num + " - это не число");
}
};
