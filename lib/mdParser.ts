
import toVFile, { VFile } from 'to-vfile';
import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const processor = unified()
  .use(remarkParse)
  .use(remark2rehype)
  .use(rehypeStringify);

export async function processMarkdown(filename: string): Promise<VFile> {
  const file = await toVFile.read(filename);
  const data = await processor.process(file);

  return { content: data.contents };
}