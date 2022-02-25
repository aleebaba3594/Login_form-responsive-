var userName1 = document.getElementById("userName1");
var pwd1 = document.getElementById("pwd1");
var sign_up_a = document.getElementById("sign_up_a");
var sign_up_btn = document.getElementById("sign_up_btn");
var login_btn = document.getElementById("login_btn");
var p = document.getElementById("p");

sign_up_a.addEventListener("click", (e) => {
  var form_login = document.querySelector(".form_login");
  var form_signup = document.querySelector(".form_signup");
  form_signup.style.display = "block";
  form_login.style.display = "none";
  p.innerHTML = "";

  to_refresh();
  sign_up_a.innerText = "LOGIN";
  sign_up_a.setAttribute("onclick", "a_return_login()");
  sign_up_a.onclick = function a_return_login(t) {
    location.reload();
    p.innerHTML = "";
  };
});
sign_up_btn.addEventListener("click", (e) => {
  var userName1 = document.getElementById("userName1").value.trim(userName1);
  var email1 = document.getElementById("email1").value.trim(email1);
  var pwd1 = document.getElementById("pwd1").value.trim(pwd1);
  var obj = { userName1, email1, pwd1 };
  var getdata = JSON.parse(localStorage.getItem("login"));
  if (
    obj.pwd1.trim() == 0 ||
    obj.email1.trim() == 0 ||
    obj.userName1.trim() == 0
  ) {
    e.preventDefault();
    alert("one of your input is empty");
  } else if (getdata) {
    getdata.push(obj);
    localStorage.setItem("login", JSON.stringify(getdata));
    a_return_login(t);
  } else {
    localStorage.setItem("login", JSON.stringify([obj]));
  }
  p.innerHTML = "";

  to_refresh();
});

const to_refresh = () => {
  var email = (document.getElementById("email").value = "");
  var email1 = (document.getElementById("email1").value = "");
  var userName1 = (document.getElementById("userName1").value = "");
  var pwd1 = (document.getElementById("pwd1").value = "");
  var pwd = (document.getElementById("pwd").value = "");
};
login_btn.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value;
  if (email.trim() == 0 || pwd.trim() == 0) {
    alert("email or password field is empty");
  }
  var getdata = JSON.parse(localStorage.getItem("login"));
  var a = getdata.filter((e) => {
    return pwd == e.pwd1 && email == e.email1;
  });

  if (a != 0) {
    a.map((e, i) => {
      console.log(e, i);
      p.innerHTML = `SUCCESSFULLY LOGED IN <br><br>${e.email1} <br> password=${e.pwd1}`;
    });
  } else {
    p.innerHTML = "INCORRECT 'ID' <br>OR<br> 'PASSWORD'";
  }
  to_refresh();

  e.preventDefault();
});
to_refresh();
