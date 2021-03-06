import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';
import {mockData} from '../mock-data';


// test outline
// test('test description', () => {
//  expect(someFunction()).toBe(somevalue);
// });

//describe(): groups tests into scopes
describe('<EventList /> component', () => {
    //test1
    test('render correct number of EventList', () => {
        // shallow() allows a search within a component, instead of a react component that renders to the dom. Meaning it only renders the specific react component.
        //call the shallow() function using App as its parameter, then set it to variable AppWrapper
        let EventListWrapper = shallow(<EventList events={mockData} />); //Passing in a prop, saying that EventList contiains 3 events
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length) //how many EventList components exist within AppWrapper (the react component; <App />)
    });
});