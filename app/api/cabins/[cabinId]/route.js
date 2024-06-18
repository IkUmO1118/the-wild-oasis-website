import { getBookedDatesByCabinId, getCabin } from '@/app/_lib/data-service';

// nameはHTTP動詞の名前の必要がある(GET, POST, DELETE, PATCH)
export async function GET(req, { params }) {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: 'Cabin not found' });
  }
}

// export async function POST() {}
