import React, { useEffect, useState, useMemo } from "react";

import { UserContext, SetUserContext } from "./UserContext";

const UserState = (props) => {
    const initialState = getUserStorage() ?? {
        token: '',
        id_person: null,
        name: '',
        username: '',
        last_name: '',
        email: '',
        role: null,
        area: null,
        status: null,
        isLogged: false,
    };

    const [userState, setUserState] = useState(initialState);
    const [userCode, setUserCode] = useState("");
    const [fullname, setFullname] = useState("");
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState();
    const [idAppointment, setIdAppointment] = useState(null);
    const values = useMemo(() => (
            {
                token: userState.token,
                id_person: userState.id_person,
                name: userState.name,
                username: userState.username,
                last_name: userState.last_name,
                email: userState.email,
                role: userState.role,
                area: userState.area,
                status: userState.status,
                isLogged: userState.isLogged,
                userCode,
                fullname,
                age,
                gender,
                idAppointment,
                
                getUserStorage,
                settingUserCode,
                settingFullname,
                settingAge,
                settingGender,
                settingIdAppointment,
            }
        ),
        [userState,age,fullname,gender,idAppointment,userCode])

    useEffect(() => {
        setUserStorage(userState);
    }, [userState])

    function setUserStorage(args) {
        localStorage.setItem('userState', JSON.stringify(args));
    }

    function getUserStorage() {
        return JSON.parse(localStorage.getItem('userState'));
    }

    const setUser = (args) => {
        setUserState(currentState => {
            console.log(currentState);
            return {
                ...currentState,
                ...args
            }
        })
    }

    function settingUserCode(code) {
        setUserCode(code);
    };

    function settingFullname(name, lastname) {
        const n = name + ' ' + lastname;
        setFullname(n);
    };

    function settingAge(age) {
        setAge(age);
    };

    function settingGender(gender) {
        setGender(gender);
    };

    function settingIdAppointment(id) {
        setIdAppointment(id);
    };

    return (
        <UserContext.Provider
            value={values}
        >
            <SetUserContext.Provider
                value={
                    setUser
                }
            >
                {props.children}
            </SetUserContext.Provider>
        </UserContext.Provider>
    );
}

export default UserState;