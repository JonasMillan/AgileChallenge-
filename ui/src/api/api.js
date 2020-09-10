const url = `http://localhost:3001/api`;

export const API = {
  userTransactions: {
    async getUsersTransactions() {
      const response = await fetch(`${url}/users/1/transactions`);
      const data = await response.json();
      return data;
    },
    async getUsersData() {
      const response = await fetch(`${url}/users/1`);
      const data = await response.json();
      return data;
    },
  },
};
