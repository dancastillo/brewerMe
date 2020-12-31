import { LocationController } from './location.controller';
import { LocationService } from './location.service';

const locationService = new LocationService();
const locationController = new LocationController(locationService);

export {
  locationController
};
