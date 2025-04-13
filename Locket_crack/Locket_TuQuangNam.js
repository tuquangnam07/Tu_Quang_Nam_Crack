// ========= ID ứng dụng ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// ========= Premium giả mạo ========= //
// ========= Mod by Từ Quang Nam ========= //

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
var obj = JSON.parse($response.body);

// Thêm thông báo trong app
obj.Attention = "Mod bởi Từ Quang Nam! Không bán lại hoặc chia sẻ công khai!";

// Thông tin người dùng giả mạo
var tuquangnam = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-18T01:04:17Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2024-07-28T01:04:18Z",
  purchase_date: "2024-07-28T01:04:17Z",
  store: "app_store"
};

var premiumData = {
  grace_period_expires_date: null,
  purchase_date: "2024-07-28T01:04:17Z",
  product_identifier: "com.tuquangnam.premium.yearly",
  expires_date: "2099-12-18T01:04:17Z"
};

// Áp dụng mapping nếu tìm thấy app tương ứng
const match = Object.keys(mapping).find(e => ua.includes(e));

if (match) {
  let [entitlement, productId] = mapping[match];
  if (productId) {
    premiumData.product_identifier = productId;
    obj.subscriber.subscriptions[productId] = tuquangnam;
  } else {
    obj.subscriber.subscriptions["com.tuquangnam.premium.yearly"] = tuquangnam;
  }
  obj.subscriber.entitlements[entitlement] = premiumData;
} else {
  obj.subscriber.subscriptions["com.tuquangnam.premium.yearly"] = tuquangnam;
  obj.subscriber.entitlements.pro = premiumData;
}

$done({ body: JSON.stringify(obj)});

