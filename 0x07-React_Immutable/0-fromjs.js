import { fromJS } from 'immutable';

const getImmutableObject = (object) => fromJS(object);
export default getImmutableObject;
// console.log(getImmutableObject({
//     fear: true,
//     smell: -1033575916.9145899,
//     wall: false,
//     thing: -914767132,
// }));
