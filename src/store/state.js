let defaultCity = '北京';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
  // continue regardless of error;
}

export default {
  city: defaultCity,
};
