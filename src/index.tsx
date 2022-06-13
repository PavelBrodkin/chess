import 'reflect-metadata';
import ReactDOM from 'react-dom';
import { initBootstrap } from './bootstrap/initBootstrap';
import { Bootstrap } from './bootstrap';
import { DIContext } from './presentation/context/DIContext';
import App from './presentation/ui/App';
import { BrowserRouter as Router } from 'react-router-dom';

initBootstrap(new Bootstrap())
  .then((bootstrap) => {
    const diContainer = bootstrap.getDiContainer;

    ReactDOM.render(
      <DIContext.Provider value={diContainer}>
        <Router>
          <App />
        </Router>
      </DIContext.Provider>,
      document.getElementById('root')
    );
  })
  .catch((err) => console.log(err));
