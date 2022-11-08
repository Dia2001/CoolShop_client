import { removeAscent } from './index'

export const isVietnamesePhoneNumber = (number) => {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

export const isName = (string) => {
  var re = /^[a-zA-Z ]+$/
  return re.test(removeAscent(string))
}
