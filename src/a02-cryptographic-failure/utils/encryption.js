import md5 from 'md5'
import { getSolutionToExport } from 'owasp-shared/export-solution.js'
import * as solution from './solution.js'

let encryptPassword = async function encryptPassword(password) {
  return md5(password)
}

let comparePassword = async function comparePassword(password, hash) {
  return md5(password) === hash
}

// Note: This helper just helps with internal unit testing
encryptPassword = getSolutionToExport(encryptPassword, solution.encryptPassword)
comparePassword = getSolutionToExport(comparePassword, solution.comparePassword)

export { encryptPassword, comparePassword }
