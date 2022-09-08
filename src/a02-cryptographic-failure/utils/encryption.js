import md5 from 'md5'

export async function encryptPassword(password) {
  return md5(password)
}

export async function comparePassword(password, hash) {
  return md5(password) === hash
}
