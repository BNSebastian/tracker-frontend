import { TypeRead } from '../../type/models/type';

export interface ActivityCreate {
  name: string;
  description: string;
  startedOn: string;
  endedOn: string;
}

export interface Activity {
  id: number;
  name: string;
}

export interface ActivityRead {
  id: number;
  name: string;
  type: TypeRead;
  description: string;
  startedOn: string;
  endedOn: string;
}
