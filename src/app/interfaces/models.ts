export interface ComponentMeta {
  id: string;
  typeCode: string;
  content?: string;
}

export interface Page {
  path: string;
  title: string;
  componentIds: string[];
}
