import { ReactElement } from "react";

export type CarouselData = {
    brandIcon: ReactElement;
    brandName: string;
    image: string;
    description: string;
    location: string;
}

export interface CarouselProps extends React.InputHTMLAttributes<HTMLInputElement> {
    data: CarouselData
 }


