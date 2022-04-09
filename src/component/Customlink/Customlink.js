import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";


function Customlink({to, children, ...props}) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
        style={{ color: match ? "red" : "#ffff"}}
        to={to}
        {...props}
      >
        {children}
      </Link>
    );
}

export default Customlink;