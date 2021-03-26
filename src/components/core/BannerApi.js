export const BannerApi = () => {
  return fetch(`https://petswonder.co.in/petswonder/api/listBanners`, {
    method: 'POST',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
export default BannerApi;
