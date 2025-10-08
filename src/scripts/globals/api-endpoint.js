import CONFIG from './config';

const API_ENDPOINT = {
  HAL_UTAMA: `${CONFIG.BASE_URL}/list`,
  HAL_DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
