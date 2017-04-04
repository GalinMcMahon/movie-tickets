//business logic
function Ticket(time, title, age) {
  this.time = time;
  this.movieTitle = title;
  this.age = age;
  this.matinee=false;
  this.premieres=false;
}


function MovieTheater(){
  this.premieres=["Dino", "Land"];
  this.matinee = ["12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
}

Ticket.prototype.ticketPrice = function(movieTheater){
  var price = 10;
  // if (this.movieTitle === "Dino" || this.movieTitle === "Land") {
  if (this.premieres === "Dino") {
    price += 3;
  }
  // movieTheater.matinees.forEach(function(showTime){
  //   if(this.time === showTime){
  //     this.matinee = true;
  //   }
  // });
  if (this.age <= 12 || this.age >= 65) {
    price -= 2.50;
  }
  return price;
  };






  //user interface logic
  $(document).ready(function() {
    $("form#new-movie").submit(function(event) {
      event.preventDefault();

    var time = $("select#movie-time").val();
    var movieTitle = $("select#movie-title").val();
    var age = parseInt($("input#age-type").val());
    var movieTheater = new MovieTheater();
    var newTicket = new Ticket(time, movieTitle, age);
    newTicket.ticketPrice(movieTheater);
    $("#total").append("<li>" + newTicket.ticketPrice() + "<li>");
    console.log(newTicket);

  });

});
