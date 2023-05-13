const makeUserDom = ({ call, name }) => {
  const wrapper = document.createElement("div");
  const myName = document.createElement("p");
  const myCell = document.createElement("p");

  myName.innerText = name;
  myCell.innerText = call;

  wrapper.append(myName);
  wrapper.append(myCell);

  return wrapper;
};

export default makeUserDom;
