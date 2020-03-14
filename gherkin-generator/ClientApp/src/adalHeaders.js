import { getToken } from "./adalConfig";

export const headers = { Authorization: `Bearer ${getToken()}` }; // string interpolating "bearer + the token" 

