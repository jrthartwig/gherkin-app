import { AuthenticationContext} from 'react-adal'; 

const adalConfig = {
    tenant: 'apterainc.onmicrosoft.com',
    clientId: '001ab949-cae3-4eee-bb9b-31b7418001bd',
    redirectURI: 'https://localhost:44323',
    endpoints: {
        api: 'https://apterainc.onmicrosoft.com/001ab949-cae3-4eee-bb9b-31b7418001bd'
    },
    cacheLocation: 'sessionStorage'
};

export const authContext = new AuthenticationContext(adalConfig);

export const getToken = () => authContext.getCachedToken(adalConfig.clientId);
