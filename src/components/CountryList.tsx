import React from "react";
import { Country } from "../types/country";
import { getCountries } from "../api/country.api";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
    const [countries, setCountries] = React.useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = React.useState<Country[]>([]);

    React.useEffect(() => {
        const fetchCountries = async () => {
            try {
                const data: Country[] = await getCountries();
                setCountries(data);
            } catch (error) {
                alert(error);
            }
        };
        fetchCountries();
    }, []);

    const handleSelectCountry = (country: Country): void => {
        if (!selectedCountries.find(
            (selectedCountry: Country) =>
                selectedCountry.name.common === country.name.common)
        ) {
            setSelectedCountries([...selectedCountries, country]);
        } else {
            setSelectedCountries(selectedCountries.filter((selectedCountry: Country) =>
                selectedCountry.name.common !== country.name.common
            ));
        }
    };

    const remainingCountries = countries.filter(country =>
        !selectedCountries.find(selectedCountry =>
            selectedCountry.name.common === country.name.common
        )
    );

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="w-full mx-auto">
                <h1 className="text-black text-4xl font-bold mb-4 text-center">좋아하는 나라</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {selectedCountries.map((country: Country) => (
                        <CountryCard
                            key={country.name.common}
                            country={country}
                            isActive={true}
                            onClick={handleSelectCountry}
                        />
                    ))}
                </div>
                <h1 className="text-gray-700 text-4xl font-bold mt-8 mb-4 text-center">모든 나라</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {remainingCountries.map((country: Country) => (
                        <CountryCard
                            key={country.name.common}
                            country={country}
                            isActive={false}
                            onClick={handleSelectCountry}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountryList;
