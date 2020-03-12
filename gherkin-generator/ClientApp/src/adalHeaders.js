import { getToken } from "./adalConfig";

const headers = { Authorization: `Bearer ${getToken()}` };