import React, {Fragment} from 'react';
import InjectGlobal from './styles/global';

import Home from './pages/Home/index';


const App = () =>(
<Fragment>
    <InjectGlobal />
    <Home />
</Fragment>

);



export default App;
