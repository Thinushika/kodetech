/* eslint-disable @typescript-eslint/no-explicit-any */
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

export interface GeneralInfoType {
  title: string;
  logoDark: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
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
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  feturedText: string;
  body: string[];
  slug: {
    current: string;
    _type: "slug";
  };
}

export type ProductsType = ProductType[];

export interface CaseStudiesType {
  caseName: string;
  clientLogo: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  tabImage: SanityImageSource;
  mainImage: SanityImageSource;
  projectUrl: string;
  feturedText: string;
  slug: string;
  tagline: string;
  body: string;
}

export interface TestimonialType {
  [x: string]: any;
  name: string;
  mainImage: SanityImageSource;
  company: string;
  position: string;
  rate: number;
  comment: string;
}

export interface ClientLogoType {
  [x: string]: any;
  name: string;
  mainImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}

export interface KnoledgeCenterType {
  [x: string]: any;
  title: string;
  slug: string;
  mainImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  feturedText: string;
  body: string;
}

export interface CoreValuesType {
  [x: string]: any;
  title: string;
  description: string;
  icon: SanityImageSource;
}
