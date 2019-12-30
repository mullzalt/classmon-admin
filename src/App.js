import React from 'react';
import { Admin } from 'react-admin';
import { Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
// import authProvider from './authProvider';



const dataProvider = simpleRestProvider('http://localhost:5000/');
const App = () =>
    <Admin dataProvider={dataProvider}>

    </Admin>;

export default App;
