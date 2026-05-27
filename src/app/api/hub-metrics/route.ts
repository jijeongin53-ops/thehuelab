import { NextResponse } from 'next/server';
import { getSheetData } from '@/lib/googleSheets';

export async function GET() {
  try {
    const data = await getSheetData("Inquiries!A:A");
    // Subtract 1 if the first row is a header, or just return data.length
    // Assuming there is a header row, so length - 1, bounded to 0
    const count = Math.max(0, data.length - 1);
    
    return NextResponse.json({
      metricName: "누적 문의 건수",
      value: count
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      }
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch metrics" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    }
  });
}
