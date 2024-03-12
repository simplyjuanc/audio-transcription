
const BASE_URL = 'http://localhost:3000/api/v1';


export async function postFile(file: File) {
  try {
    const formData = new FormData();
    formData.append('audio', file);
    const res = await fetch(`${BASE_URL}/transcribe`, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      throw new Error(res.status.toString());
    }
    const data: Record<'transcript', string> = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

