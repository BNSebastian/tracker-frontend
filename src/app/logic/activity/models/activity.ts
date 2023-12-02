import { TypeRead } from '../../type/models/type';

export interface ActivityCreate {
  name: string;
  description: string;
}

export interface Activity {
  id: number;
  name: string;
}

export interface ActivityRead {
  id: number;
  name: string;
  description: string;
  type: TypeRead;
}
