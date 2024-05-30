import { api } from "../api";

export class OrganizationServices {
  static async getByParams({
    theme,
    country,
    name,
  }: {
    theme: string;
    country: string;
    name: string;
  }) {
    try {
      const response = await api.get(
        `/get-by-params?name=${name}&theme=${theme}&country=${country}`
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
