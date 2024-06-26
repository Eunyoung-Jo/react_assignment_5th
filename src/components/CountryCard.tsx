import React from "react";
import { Country } from "../types/country";

interface CountryCardProps {
    country: Country;
    isActive: boolean;
    onClick: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, isActive, onClick }) => {
    return (
        <div
            className={`w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform cursor-pointer ${
                isActive ? "border border-green-400" : "border-none"
            }`}
            onClick={() => onClick(country)}
        >
            <img
                src={country.flags.png}
                className="w-20 h-auto mx-auto mb-4"
                alt={`${country.name.common} flag`}
            />
            <h2 className="text-xl font-semibold mb-4">{country.name.common}</h2>
            <p className="text-gray-600">{country.capital}</p>
        </div>
    );
};

export default CountryCard;
