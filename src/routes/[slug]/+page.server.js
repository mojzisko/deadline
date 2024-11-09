import { error } from '@sveltejs/kit'
import data from './data'

export async function load({ params }) {
  const project = data[params.slug]
  console.log('params', params)

  if (project)
    return {
      // header: {
      //   width: 'xl:w-4/6'
      // },
      project
    }

  throw error(404)
}
