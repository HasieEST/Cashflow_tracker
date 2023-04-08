import React from 'react';

import AuthContext from "../../store/AuthContext";
import classes from './Logout.module.css';

const Logout = () => {
    return (
        <AuthContext.Consumer>
            {(context) => {
                return (
                    <nav className={classes.nav}>
                        <ul>
                            {context.logged && (
                                <li>
                                    <button onClick={context.onLogout}>Logout</button>
                                </li>
                            )}
                        </ul>
                    </nav>
                )
            }
            }
        </AuthContext.Consumer>

    );
};

export default Logout;