import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import NewCard from './pages/NewCard/FormPage';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/new-card" element={<NewCard />} />
      </Routes>
    </div>
  );
};

const RouterWrap: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default RouterWrap;
