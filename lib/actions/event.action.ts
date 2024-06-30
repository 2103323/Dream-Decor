'use server'
import { connectToDatabase } from '@/lib/database'
import Event from '@/lib/database/models/event.model'
import User from '@/lib/database/models/user.model'
import { handleError } from '@/lib/utils'

import {
  CreateEventParams,
} from '@/types'



// CREATE
export async function createEvent({ userId, event }: CreateEventParams) {
  try {
    await connectToDatabase();


    const newEvent = await Event.create({ ...event})


    return JSON.parse(JSON.stringify(newEvent))
  } catch (error) {
    console.log("Hi i am error", error)
    handleError(error)

  }
}

