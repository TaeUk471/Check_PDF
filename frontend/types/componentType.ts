export interface BaseComponentData {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ImageComponentData extends BaseComponentData {
  url: string;
}
