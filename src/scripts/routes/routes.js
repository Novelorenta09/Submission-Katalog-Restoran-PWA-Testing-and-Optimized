import HalDetail from '../views/pages/hal-detail';
import HalUtama from '../views/pages/hal-utama';
import Like from '../views/pages/like';

const routes = {
  '/': HalUtama, // default page
  '/hal-utama': HalUtama,
  '/detail/:id': HalDetail,
  '/like': Like,
};

export default routes;
