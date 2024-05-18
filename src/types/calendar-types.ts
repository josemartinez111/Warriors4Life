// ---------------------------------------------------------
//               types/calendar-types.ts
// ---------------------------------------------------------

export interface FutureEvent {
  id: number;
  name: string;
  time: string;
}

export interface DayData {
  date: Date;  // Using a Date object directly to handle dates
  events: FutureEvent[];
}

export interface Week {
  days: DayData[];
}
// ---------------------------------------------------------