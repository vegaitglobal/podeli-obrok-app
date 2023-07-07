import { Reservation } from '../entity/Reservation';
import { ReservationService } from '../service/ReservationService';
import { ErrorMessage } from '../interface/Error';
import { MealService } from '../service/MealService';

export const all = async (req, res, _next): Promise<Reservation[]> => {
  const reservationService: ReservationService = new ReservationService();
  const reservedByDeviceId = req.query.reservedByDeviceId?.toString();
  const reservation = await reservationService.getAll(reservedByDeviceId);
  return res.json(reservation);
};

export const create = async (
  req,
  res,
  _next
): Promise<Reservation | ErrorMessage> => {
  const reservationService: ReservationService = new ReservationService();
  const mealService: MealService = new MealService();

  const reservation = await reservationService.save(req.body);
  if (!reservation) {
    res.status(400);
    return res.json({
      error: 'Bad request',
      message: "Can't reservate meal. Meal does not exits"
    });
  }
  await mealService.remove(req.body.mealId);
  res.status(201);
  return res.json(reservation);
};

export const deleteReservations = async (
  req,
  res,
  _next
): Promise<Reservation | ErrorMessage> => {
  const reservationService: ReservationService = new ReservationService();
  const reservationId = req.query.reservationId?.toString();
  const deleted = await reservationService.delete(reservationId);
  if (!deleted) {
    return res.json({
      error: 'Bad request',
      message:
        "Can't delete reservation. Reservation with ${reservationId} does not exits"
    });
  }
  return res.json({});
};
