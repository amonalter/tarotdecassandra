/**
 * Este é um endpoint de depuração para garantir que o build da Vercel
 * não falhe em arquivos vazios na pasta /api.
 */
export default async function handler(req: Request) {
  return new Response(
    JSON.stringify({ status: 'ok', message: 'Debug endpoint is active.' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}