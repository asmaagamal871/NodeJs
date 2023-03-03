var myMod = require("./module")

console.log(date)
let FlightAdminstration = myMod.fligthReservation;

let FlightAdmin = new FlightAdminstration()
FlightAdmin.AddFlight(1500,10,90,"Alex","cairo","18/3/2023");
FlightAdmin.AddFlight(1752,71,80,"cairo","alex","20/3/2023");

FlightAdmin.GetUserFlights(5683);

FlightAdmin.updateUserFlights(1500,10,"seatNum",450)
FlightAdmin.updateUserFlights(1752,71,"flightNum",150)