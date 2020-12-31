import { BreweryController } from './brewery.controller';
import { BreweryService } from './brewery.service';

const breweryService = new BreweryService();
const breweryController = new BreweryController(breweryService);

export {
  breweryController
};
