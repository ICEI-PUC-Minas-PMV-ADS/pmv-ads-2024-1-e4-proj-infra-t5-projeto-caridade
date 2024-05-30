import { Injectable } from '@nestjs/common';
import api from './api_service';
import { organizations } from './organizations-cache';

@Injectable()
export class AppService {
  getAll() {
    return organizations.slice(0, 10);
  }

  async getById(id: string) {
    try {
      const response = await api.get(
        `/api/public/orgservice/organization/${id}?api_key=a6d2b676-00e7-47de-9d87-ccec8b424104`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.data);
      throw error;
    }
  }

  async getByCountry(countryCode: string) {
    try {
      const response = await api.get(
        `/api/public/projectservice/countries/${countryCode}/projects?api_key=a6d2b676-00e7-47de-9d87-ccec8b424104`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.data);
      throw error;
    }
  }

  async getByTheme(themeCode: string) {
    try {
      const response = await api.get(
        `/api/public/projectservice/themes/${themeCode}/projects?api_key=a6d2b676-00e7-47de-9d87-ccec8b424104`,
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.data);
      throw error;
    }
  }

  async getByParam({
    name,
    theme,
    country,
  }: {
    name?: string;
    theme?: string;
    country?: string;
  }) {
    let filteredOrganizations = organizations;

    if (name)
      filteredOrganizations = filteredOrganizations.filter(({ name: name_ }) =>
        name_.toLowerCase().includes(name),
      );

    if (theme)
      filteredOrganizations = filteredOrganizations.filter(({ themes }) => {
        if (!themes) return false;
        return themes.filter(({ name }) => name.toLowerCase().includes(theme))
          .length;
      });

    if (country)
      filteredOrganizations = filteredOrganizations.filter(
        ({ country: country_ }) => country_.toLowerCase().includes(country),
      );

    return filteredOrganizations;
  }

  async getHello(): Promise<string> {
    try {
      // Make the GET request
      const response = await api.get(
        '/api/public/projectservice/all/projects/ids?api_key=a6d2b676-00e7-47de-9d87-ccec8b424104',
      );

      // Return the response data as a string
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error.data);
      throw error; // Rethrow the error if needed
    }
  }
}
