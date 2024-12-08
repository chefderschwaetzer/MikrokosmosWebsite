export interface Artist { 
    id: number;
    name: string;
    description: string;
    genre: string;
    origin: string;
    socials: {
      instagram: string;
      twitter: string;
      website: string;
      soundcloud?: string;
      spotify?: string;
      facebook?: string;
    };
}
