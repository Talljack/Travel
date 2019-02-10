export default {
  changeCityClick(state, city) {
    state.city = city;
    try {
      localStorage.city = city;
    } catch (e) {
      // continue regardless of error;
    }
  },
};
