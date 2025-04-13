// © Crack By Từ Quang Nam - Facebook: https://m.facebook.com/tuquangnam07

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
    obj = JSON.parse($response.body);

obj.Attention = "🎉 Chúc mừng bạn! Vui lòng không chia sẻ hoặc bán module này! Bản quyền thuộc về Từ Quang Nam.";

var tuquangnamSub = {
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

var tuquangnamEnt = {
  grace_period_expires_date: null,
  purchase_date: "2024-07-28T01:04:17Z",
  product_identifier: "com.tuquangnam.premium.yearly",
  expires_date: "2099-12-18T01:04:17Z"
};

// Mapping để xác định entitlement tương ứng với app nào (bạn có thể tùy chỉnh lại nếu có)
const mapping = {
  "Locket": ["pro", "com.tuquangnam.premium.yearly"]
};

const match = Object.keys(mapping).find(e => ua.includes(e));

if (match) {
  let [entitlement, product_id] = mapping[match];
  if (product_id) {
    tuquangnamEnt.product_identifier = product_id;
    obj.subscriber.subscriptions[product_id] = tuquangnamSub;
  } else {
    obj.subscriber.subscriptions["com.tuquangnam.premium.yearly"] = tuquangnamSub;
  }
  obj.subscriber.entitlements[entitlement] = tuquangnamEnt;
} else {
  obj.subscriber.subscriptions["com.tuquangnam.premium.yearly"] = tuquangnamSub;
  obj.subscriber.entitlements.pro = tuquangnamEnt;
}

$done({ body: JSON.stringify(obj) });
