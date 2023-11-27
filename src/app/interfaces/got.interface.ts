export interface House {
  slug: string;
  name: string;
  members: Member[];
}

export interface Member {
  name: string;
  slug: string;
}

export interface Person {
  name: string;
  slug: string;
  house: House | null;
  quotes: string[];
}

export interface PersonQoute {
  sentence: string;
  character: Character;
}

export interface Character {
  name: string;
  slug: string;
  house: House;
}
