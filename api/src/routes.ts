import { MealController } from "./controller/MealController"

export const Routes = [{
    method: "get",
    route: "/meals",
    controller: MealController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: MealController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: MealController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: MealController,
    action: "remove"
}]