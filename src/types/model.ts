import { SxProps } from "@mui/material";
import React from "react";

export interface ReactNode {
    children: React.ReactNode;
    sx?: SxProps;
}
export interface SourcesProps {
    bikroy: number;
    daraz: number;
    pickaboo: number;
}
export interface ConditionsProps {
    official: number;
    unofficial: number;
    without_warranty: number;
    used: number;
}

export interface RouteTypes {
    path?: string;
    element: React.ReactNode;
    index?: boolean;
    children?: RouteTypes[];
}

export interface PhoneDetailsTypes {
    model: string;
    released: string;
    displayType: string;
    displaySize: string;
    displayRes: string;
    mainCamera: string;
    selfieCamera: string;
    os: string;
    chipset: string;
    cpu: string;
    gpu: string;
    ram: string;
    internal_storage: string;
    external: string;
    battery: string;
    sensors: string;
}
export interface productProps {
    speciality: string[];
    phone_images: string[];
    used_phone: boolean;
    new_phone: boolean;
    official_warranty: boolean;
    unofficial_warranty: boolean;
    no_warranty: boolean;
    taking_selfies: boolean;
    taking_photos: boolean;
    gaming: boolean;
    mild_usage: boolean;
    moderate_usage: boolean;
    heavy_usage: boolean;
    display_amoled: boolean;
    high_refresh_rate: boolean;
    display_res_hd: boolean;
    display_res_fhd: boolean;
    added: string;
    more_than_4: boolean;
    less_than_4: boolean;
    more_than_64: boolean;
    less_than_64: boolean;
    _id: string;
    phone_link: string;
    phone_title: string;
    phone_details: PhoneDetailsTypes;
    phone_price: number;
    _budget: string;
    ad_type: string;
    ad_category: string;
    ad_priority: string;
    youtube_embed: string;
    brand: string;
    ram: string;
    storage: string;
    seller_name: string;
    seller_address: string;
    seller_contact: string;
    __v: number;
    tags?: string[];
}