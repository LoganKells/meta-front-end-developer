// const addFive = require('./addFive');
import {addFive} from "./addFive";

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
})