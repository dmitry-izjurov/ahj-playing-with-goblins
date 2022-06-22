import Goblin from './Goblin';
import Inspector from './Inspector';
import { positionsDOM, getAttack } from './utils';

const goblins = new Goblin();
const inspector = new Inspector();
setInterval(goblins.add, 1000);
getAttack(positionsDOM);

inspector.check();
