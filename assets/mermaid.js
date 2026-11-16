import { parse } from "@genaiscript/plugin-mermaid";

const res = await parse(`
  graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
`);
