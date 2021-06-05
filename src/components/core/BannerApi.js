export const BannerApi = () => {
  return fetch(`https://petswonder.co.in/petswonder/api/listBanners`, {
    method: 'POST',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      alert(err);
    });
};
export default BannerApi;
