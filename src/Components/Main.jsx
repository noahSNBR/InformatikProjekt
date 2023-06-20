import React, { useState } from "react";
import Erklärung from '../Sketch/Erklärung';
import Einleitung from '../Sketch/Einleitung';
import Fazit from '../Sketch/Fazit';
import Funktionsweise from '../Sketch/Funktionsweise';
import Heranführung from '../Sketch/Heranführung';
import Quellen from '../Sketch/Quellen';
import Vergleich from '../Sketch/Vergleich';
import Facharbeit from '../Sketch/SVG/MD/Facharbeit.pdf'

export default function Main() {
    const [isRendered, setRendered] = useState({
        Einleitung: false,
        Heranführung: false,
        Funktionsweise: false,
        Vergleich: false,
        Fazit: false,
        Quellen: false,
        Erklärung: false,
        Sehen: false,
    });

    function navigateTo(component) {
        const updatedRendered = {};
        Object.keys(isRendered).forEach((key) => {
            updatedRendered[key] = key === component;
        });
        setRendered(updatedRendered);
    }

    const NavButtons = () => {
        return (
            <div className="navButtons">
                <button onClick={() => navigateTo('Einleitung')}>Einleitung</button>
                <button onClick={() => navigateTo('Heranführung')}>Heranführung</button> <br />
                <button onClick={() => navigateTo('Funktionsweise')}>Funktionsweise</button>
                <button onClick={() => navigateTo('Vergleich')}>Vergleich</button> <br />
                <button onClick={() => navigateTo('Fazit')}>Fazit</button>
                <button onClick={() => navigateTo('Quellen')}>Quellen</button> <br />
                <button onClick={() => navigateTo('Erklärung')}>Eidstattlichkeit</button>
                <button onClick={() => navigateTo('Sehen')}>Ansehen</button>
            </div>
        );
    };

    const FileLink = () => {

        return (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <a style={{ color: 'var(--background)' }} href={Facharbeit}>
                    <span style={{ fontSize: "25rem" }} className="material-symbols-rounded">
                        description
                    </span>
                </a>
                <h3 style={{ color: 'var(--background)' }} > Datei </h3>
            </div>
        );
    }

    const RenderArea = () => {
        const renderedComponent = Object.keys(isRendered).find(
            (component) => isRendered[component]
        );

        const renderComponent = (component) => {
            switch (component) {
                case 'Einleitung':
                    return <Einleitung />;
                case 'Heranführung':
                    return <Heranführung />;
                case 'Funktionsweise':
                    return <Funktionsweise />;
                case 'Vergleich':
                    return <Vergleich />;
                case 'Fazit':
                    return <Fazit />;
                case 'Quellen':
                    return <Quellen />;
                case 'Erklärung':
                    return <Erklärung />;
                case 'Sehen':
                    return <FileLink />
                default:
                    return null;
            }
        };

        return <div className="renderArea">{renderComponent(renderedComponent)}</div>;
    };

    return (
        <div className="mainScreen">
            <NavButtons />
            <RenderArea />
        </div>
    );
}