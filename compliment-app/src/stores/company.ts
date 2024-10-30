import { defineStore } from "pinia";
import CompanyClient, { type NewCompliment } from "@/client/CompanyClient";
import type Company from "@/models/Company";
import { present } from "@/utils/typescript";
import type { EmployeeId } from "@/models/Employee";

interface State {
  current: Company | null;
}

export const useCompany = defineStore("company", {
  state: (): State => ({
    current: null,
  }),

  getters: {
    getCurrent(state) {
      return present(state.current);
    },

    getSelectedEmployee: (state) => {
      return (employeeId: EmployeeId) => present(state.current).employees.find((e) => e.id === employeeId)
    },
  },

  actions: {
    async fetchCompany() {
      this.current = await CompanyClient.loadCompany();
    },

    async addCompliment(employeeId: EmployeeId, newCompliment: NewCompliment) {
      const compliment = await CompanyClient.addCompliment(employeeId, newCompliment);
      this.current.employees.find((e) => e.id == employeeId).compliments.unshift(compliment);
    },
  }
});
