import { Router } from 'express';
import { getFarmerFarms } from '../farm/ger-farmer-farms';
import { isSelfGuard } from './is-self.guard';

export const farmsRouter = Router();

farmsRouter.get('/farmers/:farmerId/farms', isSelfGuard, getFarmerFarms);