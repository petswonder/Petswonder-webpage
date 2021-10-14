export const BannerApi = () => {
  // return fetch(`https://petswonder.co.in/petswonder/api/listBanners`, {
  //   method: 'POST',
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .catch((err) => {
  //     alert(err);
  //   });
  return [
    {'id': 1, 'bannerName': require('../../images/banners/1.png').default},
    {'id': 2, 'bannerName': require('../../images/banners/2.jpg').default},
    {'id': 3, 'bannerName': require('../../images/banners/3.jpg').default},
    {'id': 4, 'bannerName': require('../../images/banners/4.jpg').default},
    {'id': 5, 'bannerName': require('../../images/banners/5.jpg').default}
  ]
};
export default BannerApi;
