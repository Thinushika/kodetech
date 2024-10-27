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
  
  export interface ProductType {
    length: number;
    slice(arg0: number): unknown;
    title: string;
    mainItem: boolean;
    mainImage: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    feturedText: string;
    body: string[];
    slug: {
      current: string;
      _type: 'slug';
    };
  }
  
  export type ProductsType = ProductType[];

  export interface CaseStudiesType {
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