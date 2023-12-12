interface Activity {
  name: string;
  time: number;
}

export interface TimeElapsed {
  month: string;
  year: number;
  activities: Activity[];
}

export interface AllTimeElapsed {
  user: string;
  details: TimeElapsed[];
}
