import md5 from 'md5'
import { getSolutionToExport } from 'owasp-shared/export-solution.js'
import * as solution from './solution.js'

let hashPassword = async function hashPassword(password) {
  return md5(password)
}

let comparePassword = async function comparePassword(password, hash) {
  return md5(password) === hash
}

// Note: This helper just helps with internal unit testing
hashPassword = getSolutionToExport(hashPassword, solution.hashPassword)
comparePassword = getSolutionToExport(comparePassword, solution.comparePassword)

export { hashPassword, comparePassword }
