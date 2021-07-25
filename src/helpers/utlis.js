export function getFormBody(params) {
  // Here we are converting the properties like username and password into URL format that we see
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%20123

    formBody(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&'); // username=aakash&password=123 (Joins the strings like encodedKey and encodedValue together using '&')
}
