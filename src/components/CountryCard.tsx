import React from "react";
import { Country } from "../types/country";

interface CountryCardProps {
    country: Country;
    isActive: boolean;
    onClick: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, isActive, onClick }) => {
    const capitalText = Array.isArray(country.capital) ? country.capital.join(', ') : country.capital;

    return (
        <div
            className={`flex items-center p-4 bg-white rounded-lg shadow-md cursor-pointer h-40 ${
                isActive ? 'border-4 border-gray-700' : ''
            }`}
            onClick={() => onClick(country)}
            style={{ overflow: 'hidden' }}
        >
            <img
                src={country.flags.png}
                className="w-24 h-auto ml-2 mr-8"
                alt={`${country.name.common} flag`}
            />
            <div className="flex-1 overflow-hidden">
                <h2 className="text-black text-lg font-bold mb-2 truncate" title={country.name.common} style={({ fontSize: '18px'})}>
                    {country.name.common}
                </h2>
                <p className="text-gray-700 text-base truncate" title={capitalText} style={{ fontSize: '16px' }}>
                    {capitalText}
                </p>
                <p className="text-gray-700 text-base truncate" title={country.region} style={{ fontSize: '14px', color: 'gray'}}>
                    {country.region}
                </p>
            </div>
        </div>
    );
};

export default CountryCard;
