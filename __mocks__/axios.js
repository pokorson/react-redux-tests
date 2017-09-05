const axios = jest.genMockFromModule('axios');

axios.create = () => axios;

module.exports = axios;
