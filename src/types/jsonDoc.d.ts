export type jsonDoc = {
    name: string;
    children?: jsonDoc[];
    attr?: { [key: string]: string };
    parentNode: jsonDoc | null;
    text?: string;
  }