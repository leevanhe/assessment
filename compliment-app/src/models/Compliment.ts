export type ComplimentId = number;

export default interface Compliment {
  id: ComplimentId;
  description: string | null;
  rating: number | null;
}
