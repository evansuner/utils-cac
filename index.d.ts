declare module 'utils-cac' {
  export function convertFromContinentToCountryList(continent: string): string;
  export function convertFromContinentToCountryList(continent: string): string[];
  export function convertFromAbbrToContinent(abbr: string): string;
  export function convertFromAbbrToCountry(abbr: string): string;
  export function convertFromCountryNameToContinent(country: string): string;
  export function convertFromCountryNameToAbbr(country: string): string;
  export function exportAllContinent():string[];
  export function exportAllCountries():string[];
  export function getStructuredGeo():object[];
}