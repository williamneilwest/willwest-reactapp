import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'),
    () => {
        document.body.style.overscrollBehavior = 'contain';
    }
);
// Disable touchmove event for horizontal scrolling
document.addEventListener('touchmove', function(e) {
    if (e.touches.length === 1) {
        var touch = e.touches[0];
        var x = touch.clientX;
        var y = touch.clientY;
        var element = document.elementFromPoint(x, y);
        if (element.tagName.toLowerCase() !== 'input' && element.tagName.toLowerCase() !== 'textarea') {
            e.preventDefault();
        }
    }
}, { passive: false });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
