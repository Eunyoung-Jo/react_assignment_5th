export interface Country {
    name: {
        common: string;
    },
    capital: string[];
    region: string;
    languages: {
        [key: string]: string;
    };
    flag: string;
    maps: {
        googleMaps: string;
    };
    timezones: string[];
    flags: {
        png: string;
    };
}