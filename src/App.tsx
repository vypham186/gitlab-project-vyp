import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import RouterComponent from './router';


const App: React.FC = () => {
  return (
    <div className="app">
     

      <main className="main">
        <RouterComponent />
      </main>

      <footer className="footer">
        <p>&copy; Copyright(C) ApolloSystem co.,ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;