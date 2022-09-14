// Ignore the following code if you're doing the exercise
// This code conditionally loads either the user supplied solution
// or the solved exercise depending on an environment variable
// It is used so we can verify in CI that the provided solutions of the workshop work

import { env } from './env.js'

export function getSolutionToExport(userSolution, actualSolution) {
  if (env.USE_SOLUTION) {
    return actualSolution
  }
  return userSolution
}
