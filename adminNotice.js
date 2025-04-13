$httpClient.get("https://raw.githubusercontent.com/tuquangnam07/Tu_Quang_Nam_Crack/refs/heads/main/noti.json", function(err, resp, data) {
  if (err) {
    console.log("❌ Lỗi tải thông báo.");
    $done({});
  } else {
    let msg = JSON.parse(data);
    console.log(`📢 ${msg.message}`);
    console.log(`🔄 Phiên bản: ${msg.version}`);
    console.log(`👉 Tham gia: ${msg.url}`);
    $done({});
  }
});
