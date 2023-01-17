interface IBlogPost {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number
}

interface IJsonData {
    limit: number,
    posts: IBlogPost[],
    skip: number,
    total: number
}

export type {IBlogPost, IJsonData}