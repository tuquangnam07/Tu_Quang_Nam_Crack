// Copyright by Từ Quang Nam
// Facebook: https://www.facebook.com/tuquangnam07
// Tik Tok: https://www.tiktok.com/@tuquangnam07
// Youtube: https://www.youtube.com/@tuquangnam
// Instagram https://www.instagram.com/tuquangnam07
var body = $response.body;  
var obj = JSON.parse(body); 

obj.plan = {
    "vendor" : "apple",
    "id" : "high_tier",
    "manageable" : true,
    "plan_upsells" : [

    ],
    "plan_id" : "go-plus",
    "upsells" : [

    ],
    "plan_name" : "SoundCloud Go+"
},

obj.features = [
    {
      "name" : "offline_sync",
      "enabled" : true,
      "plans" : [
        "mid_tier",
        "high_tier"
      ]
    },
    {
      "name" : "no_audio_ads",
      "enabled" : true,
      "plans" : [
        "mid_tier",
        "high_tier"
      ]
    },
    {
      "name" : "hq_audio",
      "enabled" : true,
      "plans" : [
        "high_tier"
      ]
    },
    {
      "name" : "system_playlist_in_library",
      "enabled" : true,
      "plans" : [

      ]
    },
    {
      "name" : "ads_krux",
      "enabled" : false,
      "plans" : [

      ]
    },
    {
      "name" : "new_home",
      "enabled" : true,
      "plans" : [

      ]
    },
    {
      "name" : "spotlight",
      "enabled" : false,
      "plans" : [

      ]
    }
  ],

body = JSON.stringify(obj);
$done({body});
// Bản Quyền Được Tạo Bởi Từ Quang Nam
