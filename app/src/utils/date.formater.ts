export function generateDateFormatter(dateString: string): string {
    // Normalize timezone offset (e.g., +0300 to +03:00)
    const normalized = dateString.replace(
        /([+-])(\d{2})(\d{2})$/,
        (_match, sign, h, m) => `${sign}${h}:${m}`
    );

    const date = new Date(normalized);

    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}