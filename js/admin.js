// document.addEventListener("click", (e) => {
//   console.log(e.target);
// });
let btnLogIn = document.querySelector(".btnLogIn");
let adminNameInput = document.querySelector(".adminNameInput");
let adminPasswordInput = document.querySelector(".adminPasswordInput");
let addingDi = document.querySelector(".adding-dilog");
let addingButton = document.querySelector(".box .add-button button");
let closeAddingDi = document.querySelector(".close");
let closeBtn = document.querySelector(".form .close");
let adminsContaner = document.querySelector(".box .admins");
let addAddmin = document.querySelector(".form form .add");

// document.querySelector(".contianer .sec p.h").innerHTML = localStorage.getItem("head_sec");


let initialAdmins = [["Abdallah Fawzi", "A4", 4444]];
initialAdmins.push(["Deyaa Sami", "Deyaa", 1234]);
// localStorage.setItem("initialAdmins", initialAdmins);
let allAdmins = initialAdmins.concat([]);
// console.log(allAdmins);
let addedAdmin = [];
// if (localStorage.getItem("initialAdmins") != null) {
//   let fromSto = localStorage.getItem("initialAdmins").split(",");
//   for (let i = 0; i < fromSto.length; i += 3) {
//     // if (fromSto[i + 2] != allAdmins[i][2])
//     allAdmins.push([fromSto[i], fromSto[i + 1], fromSto[i + 2]]);
//   }
// }
if (localStorage.getItem("addedAdmin") != null) {
  let fromSto = localStorage.getItem("addedAdmin").split(",");
  for (let i = 0; i < fromSto.length; i += 3) {
    allAdmins.push([fromSto[i], fromSto[i + 1], fromSto[i + 2]]);
  }
}
//  else {
//   allAdmins = admins;
//   localStorage.setItem("admins", allAdmins);
// }

// console.log(allAdmins);
// console.log(admins.length);

let toggleDarkBtn = document.querySelector(".box .toggle-con div");
let darkBtnAdmin = document.querySelector(".darck-mode-toggle");

if (localStorage.getItem("can") == "true") {
  toggleDarkBtn.classList.add("can");
  toggleDarkBtn.innerHTML = "!(●'◡'●) You Can Convert";
  darkBtnAdmin.style.display = "block";
} else if (localStorage.getItem("can") == "false") {
  toggleDarkBtn.classList.remove("can");
  darkBtnAdmin.style.display = "none";
} else {
  localStorage.setItem("can", "false");
}

toggleDarkBtn.onclick = () => {
  if (localStorage.getItem("can") == "true") {
    localStorage.setItem("can", "false");
    toggleDarkBtn.classList.remove("can");
    darkBtn.style.display = "none";
    toggleDarkBtn.innerHTML = "!(¬‿¬) You Can Not Convert";
  } else if (localStorage.getItem("can") == "false") {
    localStorage.setItem("can", "true");
    toggleDarkBtn.classList.add("can");
    darkBtn.style.display = "block";
    toggleDarkBtn.innerHTML = "!(●'◡'●) You Can Convert";
  }
};
// document.querySelector(".a").onclick = function () {
//   if (localStorage.getItem("can") == "true") {
//     document.body.classList.toggle("dark");
//     if (document.body.classList.contains("dark")) {
//       localStorage.setItem("dark_mode", "dark");
//       document.body.style.backgroundColor = `#333`;
//     } else {
//       localStorage.setItem("dark_mode", "");
//       if (localStorage.getItem("bodyColor") === null) {
//         document.body.style.backgroundColor = `#dee1e3`;
//       } else {
//         document.body.style.backgroundColor = `${localStorage.getItem(
//           "bodyColor"
//         )}`;
//       }
//     }
//   }
// };

//change main color
let colors = document.querySelectorAll(".col");

colors.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      colors.forEach((e2) => {
        e2.classList.remove("active");
      });
      e.classList.add("active");
    } else {
      e.classList.add("active");
    }
  });
});

let change = document.querySelector(".change");
change.onclick = () => {
  // console.log(act.innerHTML);
  let act = document.querySelector(".colors .active");
  localStorage.setItem("mainColor", act.innerHTML);
  // document.body.style.cssText = `--mFain-color:${act.innerHTML};`;
};

//change body color
let col_body = document.querySelectorAll(".col-body");

col_body.forEach((e) => {
  // console.log(e.innerHTML);
  // localStorage.setItem('test', e.innerHTML);
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      col_body.forEach((e2) => {
        e2.classList.remove("active");
      });
      e.classList.add("active");
    } else {
      e.classList.add("active");
    }
  });
});

let change_body = document.querySelector(".change-body");
change_body.onclick = () => {
  if (document.body.classList.contains("dark"))
    window.alert("لا يمكن التغيير في الوضع المظلم (¬‿¬)!");
  else {
    // console.log(act.innerHTML);
    let act = document.querySelector(".colors-body .active");
    localStorage.setItem("bodyColor", act.innerHTML);
    document.body.style.backgroundColor = act.innerHTML;
  }
};
addingButton.onclick = () => {
  addingDi.classList.add("open");
  // console.log(addingDi.classList.contains == "open");
};

closeBtn.onclick = () => {
  addingDi.classList.remove("open");
  // console.log(addingDi.classList.contains == "open");
};

// console.log(allAdmins.length);
for (let i = 0; i < allAdmins.length; i++) {
  addAdminElements(allAdmins[i]);
}

let adminName = document.querySelector(".adminName");
let adminUserName = document.querySelector(".adminUserName");
let adminPassword = document.querySelector(".adminPassword");
addAddmin.onclick = () => {
  if (
    adminName.value == "" ||
    adminUserName.value == "" ||
    adminPassword.value == ""
  ) {
    window.alert("يجب أن تملئ كل الإدخالات (¬‿¬)!");
  } else {
    if (localStorage.getItem("addedAdmin") != null) {
      let fromSto = localStorage.getItem("addedAdmin").split(",");
      for (let i = 0; i < fromSto.length; i += 3) {
        addedAdmin.push([fromSto[i], fromSto[i + 1], fromSto[i + 2]]);
      }
    }
    addedAdmin.push([
      adminName.value,
      adminUserName.value,
      adminPassword.value,
    ]);
    addAdminElements(addedAdmin[addedAdmin.length - 1]);
    localStorage.setItem("addedAdmin", addedAdmin);
    addAddmin.classList.add("done");
    addAddmin.innerHTML = '<i class="fa-solid fa-check"></i>';
    setTimeout(() => {
      addingDi.classList.remove("open");
    }, 100);
  }
};

function addAdminElements(arr) {
  let adContaner = document.createElement("div");
  adContaner.classList.add("ad");
  let imgContaner = document.createElement("div");
  imgContaner.classList.add("img");
  let img = document.createElement("img");
  img.setAttribute("src", "img/admin.jfif");
  let infoContaner = document.createElement("div");
  infoContaner.classList.add("info");
  let headThree = document.createElement("h3");
  headThree.classList.add("name");
  headThree.innerHTML = arr[0];
  let unP = document.createElement("p");
  unP.setAttribute("title", "UN => User Name");
  unP.classList.add("user-name");
  unP.innerHTML = "UN: " + arr[1];
  let pwP = document.createElement("p");
  pwP.setAttribute("title", "PW => Password");
  pwP.classList.add("password");
  pwP.innerHTML = "PW: " + arr[2];
  infoContaner.appendChild(headThree);
  infoContaner.appendChild(unP);
  infoContaner.appendChild(pwP);
  imgContaner.appendChild(img);
  adContaner.appendChild(imgContaner);
  adContaner.appendChild(infoContaner);
  // console.log(adContaner);
  adminsContaner.appendChild(adContaner);
}
//log in page
function btnLogInFun() {
  let check = 0;
  // console.log(adminNameInput.value === "");
  if (adminNameInput.value == "" || adminPasswordInput.value == "") {
    window.alert("يجب أن تملئ كل الإدخالات (¬‿¬)!");
    // adminNameInput.value = "";
    // adminPasswordInput.value = "";
  } else {
    for (let i = 0; i < allAdmins.length; i++) {
      if (
        adminNameInput.value == allAdmins[i][1] &&
        adminPasswordInput.value == allAdmins[i][2]
      ) {
        btnLogIn.classList.add("opening");
        btnLogIn.innerHTML = '<i class="fa-solid fa-check"></i>';
        // console.log(44);
        localStorage.setItem("head_sec", allAdmins[i][0]);
        setTimeout(() => {
          window.open("adminPage.html", "_self");
        }, 1000);
        check++;
        break;
      }
    }
  }
  if (check === 0) {
    btnLogIn.classList.add("closing");
    btnLogIn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    window.alert("أنت ليس آدمن، إرجع (¬‿¬)!");
    setTimeout(() => {
      // window.open("index.html", "_self");
      window.close();
    }, 500);
  }
}
