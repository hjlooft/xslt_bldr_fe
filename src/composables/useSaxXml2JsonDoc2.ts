import { sax } from '../utils/sax';

type jsonDoc = {
  name: string;
  children?: jsonDoc[];
  attr?: [{[key: string]: string}];
  parentNode: jsonDoc | null;
}

export default function useSaxXml2JsonDoc() {

  const parseXml2Json = (xmlString: string): jsonDoc => {
    
  return {name: "foo", parentNode: null};

};

  return { parseXml2Json }
}