export function enPriceVnd(num) {
  return num.toLocaleString();
}

export const getToken = () => localStorage.getItem("token")

export const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken() || ''}`
  }
}

export const removeAscent = (str) => {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  return str;
}

export const convertObjectToFormData = (object) => {

  const formData = new FormData()

  for (let key in object) {
    const field = object[key]

    if (Array.isArray(field)) {
      for (let index in field) {
        formData.append(`${key}[${index}]`, field[index])
      }
    } else if (typeof field === 'object' && field.constructor === Object) {
      for (let keyOfField in field) {
        const fieldOfField = field[keyOfField]

        for (let index in fieldOfField) {
          formData.append(`${key}.${keyOfField}[${index}]`, fieldOfField[index])
        }
      }
    } else {
      formData.append(key, field)
    }
  }

  return formData
}
