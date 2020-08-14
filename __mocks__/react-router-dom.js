import React from 'react';
import rrd from 'react-router-dom';

rrd.BrowserRouter = ({children}) => <div>{children}</div>;

export default rrd;