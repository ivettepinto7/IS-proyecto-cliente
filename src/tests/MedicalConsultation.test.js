import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import MenuContext from "../contexts/MenuContext/MenuContext";
import { UserContext, SetUserContext } from "../contexts/UserContext/UserContext";
import MedicalConsultation from "../pages/MedicalConsultation";

describe('MedicalConsultation', () => {
    const menuValues = {
        emergentShowRecordState: false,
    }
    const userValues = {
        token: 'edvnkdmekdmek567kmk',
        id_person: 1,
        name: 'PruebaNombre',
        username: 'PruebaNombreUsuario',
        last_name: 'PruebaApellido',
        email: 'PruebaCorreo',
        role: 4,
        area: 1,
        status: true,
        isLogged: true,
        consultationInfo: {
            userCode: 2,
            appointmentId: 1,
            fullName: 'PruebaNombre PruebaApellido',
            age: 22,
            gender: 'M',
        }
    };

    it('should have title "Consulta"', () => {
        const { getByTestId } = render(
            <MenuContext.Provider value={menuValues}>
                <UserContext.Provider value={userValues}>
                        <Router>
                            <MedicalConsultation />
                        </Router>
                </UserContext.Provider>
            </MenuContext.Provider>
        );
        expect(getByTestId("page-title")).toBeInTheDocument();
    })

    it('should display patient name', () => {
        const { getByTestId } = render(
            <MenuContext.Provider value={menuValues}>
                <UserContext.Provider value={userValues}>
                        <Router>
                            <MedicalConsultation />
                        </Router>
                </UserContext.Provider>
            </MenuContext.Provider>
        );
        expect(getByTestId("patient-name")).toBeInTheDocument();
    })

    it('should display patient age', () => {
        const { getByTestId } = render(
            <MenuContext.Provider value={menuValues}>
                <UserContext.Provider value={userValues}>
                        <Router>
                            <MedicalConsultation />
                        </Router>
                </UserContext.Provider>
            </MenuContext.Provider>
        );
        expect(getByTestId("patient-age")).toBeInTheDocument();
    })

    it('should display patient gender', () => {
        const { getByTestId } = render(
            <MenuContext.Provider value={menuValues}>
                <UserContext.Provider value={userValues}>
                        <Router>
                            <MedicalConsultation />
                        </Router>
                </UserContext.Provider>
            </MenuContext.Provider>
        );
        expect(getByTestId("patient-gender")).toBeInTheDocument();
    })

    it('should render prescription instruction input', () => {
        const { getByTestId } = render(
            <MenuContext.Provider value={menuValues}>
                <UserContext.Provider value={userValues}>
                        <Router>
                            <MedicalConsultation />
                        </Router>
                </UserContext.Provider>
            </MenuContext.Provider>
        );
        expect(getByTestId("instruction")).toBeInTheDocument();
    })

    it('should correctly set default option in drugs dropdown', () => {
        const { getByTestId } = render(
            <MenuContext.Provider value={menuValues}>
                <UserContext.Provider value={userValues}>
                        <Router>
                            <MedicalConsultation />
                        </Router>
                </UserContext.Provider>
            </MenuContext.Provider>
        );
        expect(getByTestId("default-option", { name: "Sleccionar medicamento" }).selected).toBe(true);
    })
})