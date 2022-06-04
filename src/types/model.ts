import { SxProps } from "@mui/material";

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