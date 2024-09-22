export type LinkRef = {
  link: string;
  ref: React.RefObject<HTMLDivElement>;
};

export type Project = {
  title: string;
  description: string[];
  gitLink: string;
  icon?: any;
};

export interface Hobby {
  title: string;
  icon: any;
  description: string;
  image: string;
  imageCaption?: string;
  isVideo?: boolean;
}
