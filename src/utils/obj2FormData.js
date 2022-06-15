export const obj2FormData = (obj, formDataObj) => {
  let formDataNew = formDataObj

  const createFormData = (obj, subKeyStr = '') => {
    for (let i in obj) {
      let value = obj[i]
      let subKeyStrTrans = subKeyStr ? subKeyStr + '[' + i + ']' : i

      if (typeof value === 'string' || typeof value === 'number') {
        formDataNew.append(subKeyStrTrans, value)
      } else if (typeof value === 'object') {
        createFormData(value, subKeyStrTrans)
      }
    }
  }

  createFormData(obj)

  return formDataNew
}
