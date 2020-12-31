import { BeerController} from './beer.controller';
import { BeerService } from './beer.service';

const beerService = new BeerService();
const beerController = new BeerController(beerService);

export { beerController };
