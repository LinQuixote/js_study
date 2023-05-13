import MakeLoading from "./loading.js"; // loading을 표현한 html elements(div)를 리턴하는 함수
import Throttle from "./Throttle.js"; // 클로저로 스로틀을 구현한 함수
import GetPerson from "./getData.js"; // api url 입력하면 전화번호와 이름을 담은 객체를 리턴하는 함수
import MakeUserDom from "./makeUserDom.js"; // 아름과 전화번호를 객체로 받으면 래펴 html 태그로 감싸서 리턴해주는 함수.

const button = document.createElement("button");
button.innerText = "생성";

document.body.append(button);

const url = "https://randomuser.me/api/";

const loadingDiv = MakeLoading();
document.body.append(loadingDiv);
loadingDiv.classList.add("hide-spinner");

const removeClass = () => {
  loadingDiv.classList.remove("hide-spinner");
};

const getUserDOM = async () => {
  const userDate = await GetPerson(url);
  if (!userDate) {
    return;
  }
  const createDom = MakeUserDom(userDate);
  loadingDiv.classList.add("hide-spinner");
  document.body.append(createDom);
};

button.addEventListener("click", Throttle(removeClass, getUserDOM, 1500));
