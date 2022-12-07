export interface Car {
    id?: string;
    title: string;
    image: string;
    imageList?: [string];
    euroPrice: string;
    description?: string;
  }

export type ChangeValuePayload = { inputName: string; inputValue: string };
