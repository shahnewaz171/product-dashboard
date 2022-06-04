import { SxProps } from "@mui/material";
import React from "react";

export interface ReactNode {
    children: React.ReactNode;
    sx?: SxProps;
}
export interface SourcesProps{
    bikroy: number;
    daraz: number;
    pickaboo: number;
}
export interface ConditionsProps{
    official: number;
    unofficial: number;
    without_warranty: number;
    used: number;
}

export interface RouteTypes{
    path?: string;
    element: React.ReactNode;
    index?: boolean;
    children?: RouteTypes[];
}