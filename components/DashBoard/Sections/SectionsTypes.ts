export type getSectionsParameters = {
    date: Date;
}

export type SectionsProps = {
    date: Date;
    sections: Section[];
}

export type Section = {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};