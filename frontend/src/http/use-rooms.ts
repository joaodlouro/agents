import { useQuery } from '@tanstack/react-query'
import type { GetRoomsResponse } from './types/get-rooms-response'

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('https://agents-5j9a.vercel.app/rooms')
      const result: GetRoomsResponse = await response.json()

      return result
    },
  })
}
