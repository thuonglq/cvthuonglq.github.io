"use strict";

document.querySelector(".formnhaplieu").classList.remove("hide");
function formValidate() {
  let email = document.getElementById("xacthucemail").value;
  let regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regExp.test(email) === true) {
    // alert("Email hợp lệ!");
    document.querySelector(".ttcn").classList.remove("hide");
    // document.querySelector(".ttcn").style.marginLeft = "500px";
    // document.querySelector(".ttcn").style.marginTop = "-240px";
    document.querySelector(".formnhaplieu").classList.add("hide");
  } else {
    alert("email không hợp lệ!");
  }
}

//ẨN HIỆN THÔNG TIN KINH NGHIỆM,KỸ NĂNG,NGÔN NGỮ,HOẠT ĐỘNG, HỌC VẤN, SỞ THÍCH
//KINH NGHIỆM

function myFunctionkinhnghiem() {
  let idkinhnghiem3 = document.getElementById("idkinhnghiem3");

  let myBtn1 = document.getElementById("myBtn1");

  if (idkinhnghiem3.style.display === "none") {
    idkinhnghiem3.style.display = "inline";
    myBtn1.innerHTML = "View More";
  } else {
    idkinhnghiem3.style.display = "none";
    myBtn1.innerHTML = "View Less";
  }
}

//KỸ NĂNG
function myFunctionkynang() {
  let idkynang3 = document.getElementById("idkynang3");

  let myBtn2 = document.getElementById("myBtn2");

  if (idkynang3.style.display === "none") {
    idkynang3.style.display = "inline";
    myBtn2.innerHTML = "View More";
  } else {
    idkynang3.style.display = "none";
    myBtn2.innerHTML = "View Less";
  }
}
//NGÔN NGỮ
function myFunctionngonngu() {
  let idngonngu3 = document.getElementById("idngonngu3");

  let myBtn3 = document.getElementById("myBtn3");

  if (idngonngu3.style.display === "none") {
    idngonngu3.style.display = "inline";
    myBtn3.innerHTML = "View More";
  } else {
    idngonngu3.style.display = "none";
    myBtn3.innerHTML = "View Less";
  }
}
//HOẠT ĐỘNG
function myFunctionhoatdong() {
  let idhoatdong3 = document.getElementById("idhoatdong3");

  let myBtn4 = document.getElementById("myBtn4");

  if (idhoatdong3.style.display === "none") {
    idhoatdong3.style.display = "inline";
    myBtn4.innerHTML = "View More";
  } else {
    idhoatdong3.style.display = "none";
    myBtn4.innerHTML = "View Less";
  }
}
//HỌC VẤN
function myFunctionhocvan() {
  let idhocvan3 = document.getElementById("idhocvan3");

  let myBtn5 = document.getElementById("myBtn5");

  if (idhocvan3.style.display === "none") {
    idhocvan3.style.display = "inline";
    myBtn5.innerHTML = "View More";
  } else {
    idhocvan3.style.display = "none";
    myBtn5.innerHTML = "View Less";
  }
}
//SỞ THÍCH
function myFunctionsothich() {
  let idsothich3 = document.getElementById("idsothich3");

  let myBtn6 = document.getElementById("myBtn6");

  if (idsothich3.style.display === "none") {
    idsothich3.style.display = "inline-block";
    myBtn6.innerHTML = "View More";
  } else {
    idsothich3.style.display = "none";
    myBtn6.innerHTML = "View Less";
  }
}
