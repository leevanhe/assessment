import type Compliment from "@/models/Compliment";

export type EmployeeId = number;

export default interface Employee {
  id: EmployeeId;
  name: string;
  description: string;
  compliments: Array<Compliment>;
}
