import React from "react";

const UserContext = React.createContext()
// Context is a way to manage state globally.
// It can be used together with the useState Hook to share state between deeply nested components more easily.
// Context API allows data to be passed through a component tree without having to pass props manually at every level.

export default UserContext;