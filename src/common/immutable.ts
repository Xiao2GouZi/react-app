
import * as Immutable from 'immutable'


export const map = () => {

    let test = Immutable.Map({name: '小明', age: 12, sex: '男', active: Immutable.Map({hobby: '打架'})});

    let test1 = test.set('name', '小黑');

    let test2 = test.withMutations(state => {
        state.set('name', '小李');
        state.set('age', 14)
    });

    let test3 = test.delete('name');

    let test4 = test.remove('age');

    let test5 = test.clear();

    let test6 = test.asImmutable();

    let test7 = test.asMutable();

    let test8 = test.setIn(['active', 'hobby'], '打澎澎')

    console.log(' -- test --', test.toJS());
    console.log(' -- test1 --', test1.toJS());
    console.log(' -- test2 --', test2.toJS());
    console.log(' -- test3 --', test3.toJS());
    console.log(' -- test4 --', test4.toJS());
    console.log(' -- test5 --', test5.toJS());
    console.log(' -- test6 --', test6.toJS());
    console.log(' -- test7 --', test7.toJS());
    console.log(' -- test8 --', test8.toJS());






};


export const formJS = () => {
    let test = Immutable.fromJS({name: '小明', age: 12, sex: '男', active: {hobby: '打架'}})

    let test1 = test.set('name', '夏黑');
    let test2 = test.setIn(['active', 'hobby'], '打澎澎')





    console.log(' -- test --', test.toJS());
    console.log(' -- test1 --', test1.toJS());
    console.log(' -- test1 --', test2.toJS());


}









