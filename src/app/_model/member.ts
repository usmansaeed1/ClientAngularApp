import { Photo } from "./photo";



export interface member {
    id: number;
    userName: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    photoUrl: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
  }
  
