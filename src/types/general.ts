import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
}


export interface GeneralInfoType {
    title: string;
    logoDark: {
      _type: 'image';
      asset: {
        _ref: string; 
        _type: 'reference';
      };
    };
    logoLight: SanityImageSource;
    email: string[];
    contactNumbers: string[];
    address: string;
    socialLinks: SocialLink[];
    sectorCount: number;
    countryCount: number;
  }
  
