import { MealController } from "./controller/MealController";
import { ReservationController } from "./controller/Reservation";

// getAll
// getByDeviceId
export const Routes = [
  {
    method: "get",
    route: "/meals",
    controller: MealController,
    action: "all",
  },
  {
    method: "post",
    route: "/meals",
    controller: MealController,
    action: "create",
  },
  {
    method: "get",
    route: "/reservation",
    controller: ReservationController,
    action: "all",
  },
  {
    method: "post",
    route: "/reservation",
    controller: ReservationController,
    action: "create",
  },
  {
    method: "delete",
    route: "/reservation",
    controller: ReservationController,
    action: "delete",
  },
  // POST Meal - kreiranje obroka
  // GET Reservation - preuzimanje rezervacije na osnovu deviceId
  // POST Reservation - rezervisanje
  // DELETE Reservation - logicko brisanje rezervacije
];
