import '@codear/lilac/dist/lilac.css';
import '../global.css';
import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

export default withGA('UA-148017514-1', Router)(App);
