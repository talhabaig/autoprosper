export type CustomizeSteps = Array<{
    id: number;
    text: string;
    content?: React.ReactElement;
    title: string;
    subTitle: string;
    displayNextButton?: boolean;
    displaySkipButton?: boolean;
    selectedCar?: {
        imageUrl: string;
        name: string;
    }
}>