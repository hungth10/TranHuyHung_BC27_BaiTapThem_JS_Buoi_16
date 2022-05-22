function primeNum() {
  // B1 DOM và lấy giá trị số n
  var num_N = +document.querySelector("#num-N").value;

  // B2 dùng các hàm logic để tìm tất cả số nguyên từ 1 đến n
  if (num_N < 2) {
    // Không có số nguyên tố nào nhỏ hơn 2
    document.querySelector("#result").innerHTML = `
        Không có số nguyên tố nào nhỏ hơn 2`;
  } else {
    for (var i = 2; i <= num_N; i++) {
      var count = 0;

      // nếu i là số nguyên tố thì trong khoảng từ 2 đến căn bậc 2 của i không tồn tại số mà i chia hết
      for (var x = 2; x <= Math.sqrt(i); x++) {
        if (i % x === 0) {
          count++;
        }
      }

      if (count === 0) {
        document.getElementById("result").innerHTML += i + " ";
      }
    }
  }
}
