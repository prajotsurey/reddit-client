type serverFormError = {
  field: string,
  message: string
}

const mapToFormikErrors = (errors: serverFormError[]):Record<string, string> => {
  const map:Record<string,string> = {}
  errors.map(error => {
    map[error.field] = error.message
  })
  return map
}

export default mapToFormikErrors