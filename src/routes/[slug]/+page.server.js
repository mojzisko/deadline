import { error } from '@sveltejs/kit'
import data from './data'

export async function load({ params }) {
  const project = data[params.slug]

  if (project)
    return {
      project
    }

  throw error(404)
}
