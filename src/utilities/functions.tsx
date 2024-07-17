/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { baseUrl } from '../baseurl/BaseUrl.ts';

export const callApi = async (
  method: string,
  url: string,
  dataObj: any = null,
  headers: any = {},
  bUrl: boolean = true
) => {
  const apiUrl = bUrl ? `${baseUrl}${url}` : `${url}`;
  try {
    headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    const response = await axios({
      method: method,
      url: apiUrl,
      data: dataObj,
      headers: headers,
    });

    return response;
  } catch (error: any) {
    if (error.response) {
      return error.response;
    } else {
      // console.error('Error making API call:', error);
      return null;
    }
  }
};

export const generateMail = () => {
  const now = new Date();
  const uniquePrefix = Math.random().toString(36).substring(2, 8);
  const timestamp = `${now.getFullYear() % 100}${(
    '0' +
    (now.getMonth() + 1)
  ).slice(-2)}${('0' + now.getDate()).slice(-2)}${('0' + now.getHours()).slice(
    -2
  )}${('0' + now.getMinutes()).slice(-2)}`;

  return `${uniquePrefix}${timestamp}@mustafiz.org`;
};
