// const loadingSpinner = document.createElement('div');
// loadingSpinner.classList.add('loading-spinner');
// document.body.appendChild(loadingSpinner);

const MakeLoading = () => {
  const loadingSpinner = document.createElement("div");
  loadingSpinner.classList.add("loading-spinner");

  return loadingSpinner;
};

export default MakeLoading;
