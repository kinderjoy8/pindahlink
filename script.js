function validasi() {
    var nicknamelu = document.forms["myForm"]["nicknamelu"].value;
    var nicknamegua = document.forms["myForm"]["nicknamegua"].value;
    var password = document.forms["myForm"]["binatang"].value;
    if (nicknamelu == "GummyBibi" && nicknamegua == "kinderjoy" && password == "ikan cupang") {
      document.getElementById("isinya").style.display = "block";
      var ig = document.getElementById("ig");
      var line = document.getElementById("line");
      var telegram = document.getElementById("telegram");

      ig.innerText= "Instagram: herisetiawan8";
      line.textContent += "Id line: herisetiawan8";
      telegram.textContent += "Telegram: @herisetiawan8";
      return true;
    } else if (nicknamelu == "" || nicknamegua == "" || password == "") {
      alert("Masukan nickname dan binatang Anda");
      return false;
    } else {
      alert("nickname atau binatang yang Anda masukan SALAH");
      return false;
    }
  }

  function cobadeh() {
    document.getElementById("isinya").style.display = "block";
  }