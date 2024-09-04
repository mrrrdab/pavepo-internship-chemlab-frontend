type GetImageDTO = { id: number; url: string; priority?: number };

type GetFileDTO = { id: number; title: string; url: string; preview: GetImageDTO };

export type { GetImageDTO, GetFileDTO };
