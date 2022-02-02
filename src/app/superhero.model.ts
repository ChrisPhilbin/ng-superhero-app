export interface Superhero {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    race: string;
    gender: string;
    eyeColor: string;
    hairColor: string;
    height: string[];
    weight: string[];
  };
  biography: {
    fullName?: string;
    aliases: string[];
    alterEgos: string;
    firstAppearance: string;
  };
  work: {
    occupation: string;
  };
  connections: {};
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}
