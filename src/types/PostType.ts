export interface PostType {
  index: number;
  type: string;
  status: string;
  date: string;
  title: string;
  writer: string;
  content: string;
  isPinned?: boolean;
  img?: string;
  img2?: string;
  content2?: string;
}
