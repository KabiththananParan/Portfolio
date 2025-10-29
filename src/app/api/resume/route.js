import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'resume.pdf');
    const fileBuffer = await fs.promises.readFile(filePath);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': String(fileBuffer.length),
        // Force download with a friendly filename
        'Content-Disposition': 'attachment; filename="Paran_Kabiththanan_Resume.pdf"',
      },
    });
  } catch (err) {
    return new Response('Not found', { status: 404 });
  }
}
