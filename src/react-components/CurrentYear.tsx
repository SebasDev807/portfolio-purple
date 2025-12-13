import { useEffect, useState } from "react";

export const CurrentYear = () => {

    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const interval = setInterval(() => {
            setYear(new Date().getFullYear());
        }, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, []);


    return (
        <span>
            {year}
        </span>
    );
};