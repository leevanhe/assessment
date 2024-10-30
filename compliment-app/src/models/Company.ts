import type Employee from "@/models/Employee";

export type CompanyId = number;

export default interface Company {
  id: CompanyId;
  name: string;
  description: string;
  location: string;
  created_at: Date;
  updated_at: Date;
  employees: Array<Employee>;
}
