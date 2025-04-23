export async function FETCH(url: string, options?: RequestInit) {
  let result;
  const method = options?.method || "GET";
  const body = options?.body;
  try {
    const response = await fetch(url, { method, body });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("Content-Type");

    if (contentType?.includes("application/json")) {
      result = await response.json();
    } else {
      result = await response.text();
      console.warn("Received non-JSON response:", result);
    }

    if (typeof result === "string") {
      throw new Error(`Unexpected response: ${result}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
  return result;
}
