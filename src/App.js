import React from 'react';
import Header from './Header';
import Calculator from './Calculator/Calculator';

const App = () => (
    <div>
        <Header title='Calculator'/>
        <div>
            <Calculator/>
        </div>
    </div>
);

export default App;
