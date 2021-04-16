import React from 'react'
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Navbar } from '../../Shared-components/Navbar';

export const DashBoard = () => {
    const { activeUser, isAuth } = useSelector( state => state.auth );
    if( isAuth ) {
        return <Redirect to="/users/sign-in" />
    }

    console.log(activeUser);
    return (
        <div>
            <Navbar />
            {
                JSON.stringify(activeUser)
            }
        </div>
    )
}
