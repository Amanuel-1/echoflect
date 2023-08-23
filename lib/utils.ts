export function shortener(text: string): string {
    let result: string; // Declare the type of 'result' as string
  
    if (text.length > 500) {
      result = text.substring(0, 500) + "...";
    } else {
      result = text;
    }
  
    return result;
  }