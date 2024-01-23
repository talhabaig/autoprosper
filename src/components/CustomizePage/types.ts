export type CustomizeSteps = Array<{
    id: number;
    text: string;
    content?: React.ReactElement;
    title: string;
    subTitle: string;
    selectedCar?: {
        imageUrl: string;
        name: string;
    }
}>