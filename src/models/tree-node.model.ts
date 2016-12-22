export interface TreeNode {
    id: number,
    type: 'category' | 'product',
    name: string,
    children?: TreeNode[]
}