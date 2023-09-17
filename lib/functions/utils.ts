
import remarkReact from 'remark-react';
import { createElement } from 'react';
import remarkHtml from 'remark-html';


import {unified} from 'unified'
import remarkParse from 'remark-parse'



export function shortener(text: string,size:number): string {
    let result: string; // Declare the type of 'result' as string
  
    if (text.length > size) {
      result = text.substring(0, size) + "...";
    } else {
      result = text;
    }
  
    return result;
  }

  export function getDomain() {
    const protocol = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http"
    const domain = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "localhost:3000"
    return `${protocol}://${domain}`
}
