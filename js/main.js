var euro = 11181.36;
var dollar = 10966.96;
var ticket = 500 * dollar;
var hotel = 250 * dollar;
var cinema = 120 * euro;
var all = ticket + hotel + cinema;
console.log(all);
var money = +prompt("Sizda qancha pul bor?");

var elText = document.querySelector(".js-text");

if (all <= money) {
  elText.textContent = "Oq yo'l, Jonibek!";
} else {
  elText.textContent =
    "Jonibek, Shahzoddan so'ra, balki berar! U ham bermasa bollardan so'ra! Ularam bermasa uyda telefonda kino ko'r!";
}
