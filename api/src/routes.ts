import { MealController } from "./controller/MealController";

// getAll
// getByDeviceId
export const Routes = [{
    method: "get",
    route: "/meals",
    controller: MealController,
    action: "all"
},

// POST Meal - kreiranje obroka
// POST Reservation - rezervisanje
// DELETE Reservation - logicko brisanje rezervacije
// GET Reservation - preuzimanje rezervacije na osnovu deviceId

 //{
//     method: "post",
//     route: "/users",
//     controller: MealController,
//     action: "save"
// }, {
//     method: "delete",
//     route: "/users/:id",
//     controller: MealController,
//     action: "remove"
// }
]