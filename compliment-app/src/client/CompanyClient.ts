import data from '../../../api/data.json';
import type Company from "@/models/Company";
import type { EmployeeId } from "@/models/Employee";
import type Compliment from "@/models/Compliment";

export interface NewCompliment {
  description: string;
  rating: number | null;
}

export default class CompanyClient {
  static async loadCompany(): Promise<Company> {
    return data.data;
  }

  static async addCompliment(employeeId: EmployeeId, newCompliment: NewCompliment): Promise<Compliment> {
    console.log(newCompliment);

    return {
      id: Math.floor(Math.random()*120) + 1,
      ...newCompliment
    } as Compliment;
  }
}
