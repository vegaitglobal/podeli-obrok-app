import * as express from 'express';
import { all, create } from '../controller/MealController';
import { makeValidateBody } from 'express-class-validator';
import { MealDTO } from '../dto/MealDto';

const router = express.Router();
router.get('/', all);
router.post('/', makeValidateBody(MealDTO), create);

export default router;
