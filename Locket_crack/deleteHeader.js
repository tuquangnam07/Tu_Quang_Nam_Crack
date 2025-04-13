/***********************************************
> deleteHeader by Từ Quang Nam
***********************************************/	

const version = 'V1.0.2';

function setHeaderValue(headers, name, value) {
  const lowerName = name.toLowerCase();
  if (lowerName in headers) {
    headers[lowerName] = value;
  } else {
    headers[name] = value;
  }
}

var modifiedHeaders = $request.headers;
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");

$done({ headers: modifiedHeaders });
