import React from 'react';
import Pet from './components/Pet';

class App extends React.Component{
    render(){
        return(
            <div>
                <Pet
                    name='Perlita'
                    animal='Dog'
                    breed='Common'
                ></Pet>
            </div>
        );
    }
}

export default App;