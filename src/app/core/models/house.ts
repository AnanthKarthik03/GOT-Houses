/**
 * Interface representing a House resource from the Ice and Fire API.
 */
export interface House {
    url: string;
    name: string;
    region: string;
    coatOfArms: string;
    words: string;
    titles: string[];
    seats: string[];
    currentLord: string; // URL to Character
    swornMembers: string[]; // URLs to Characters
  }