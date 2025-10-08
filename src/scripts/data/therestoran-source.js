import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoranDbSource {
  static async halUtama() {
    const response = await fetch(API_ENDPOINT.HAL_UTAMA);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestoran(id) {
    const response = await fetch(API_ENDPOINT.HAL_DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default TheRestoranDbSource;
