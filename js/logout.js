var logoutBtn = $("#logoutBtn");

logoutBtn.click(function () {
  logOut(); //呼叫登出function
});

// 準備要傳的參數

// 登出api function
function logOut() {
  var data = {
    /*
        account: login_game_lobby_data.account,
        token: login_game_lobby_data.token*/ //這條不會動不知道為啥
    account: localStorage.getItem("login_game_lobby_data.account"),
    token: localStorage.getItem("data_select_game_lobby.token"),
  };

  // 呼叫登出api
  getAjaxPromiseBox(data, "POST", game_lobby_logout)
    .then((res) => {
      console.log("api");

      // 判斷是否登出成功
      if (res.result == 1) {
        var loginBox = document.getElementById("loginBox");
        var wrapper = document.getElementById("wrapper");

        alert("登出成功");

        loginBox.classList.remove("displaynone");
        wrapper.classList.add("displaynone");

        localStorage.clear();

        // 渲染畫面 / 清空帳號密碼
        $("#fromuserAccount").val(""); //輸入框 帳號
        $("#fromuserPassword").val(""); //輸入框 密碼
        $("#account").val(""); //顯示框 帳號
        $("#money").val(""); //顯示框 錢錢
        $("#diamond").val(""); //顯示框 鑽鑽

        //　把登入畫面解除隱藏狀態
        $(".loginWindow").each(function () {
          $(this).removeClass("displaynone");
        });

        location.reload();
      } else {
        alert("錯誤");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
