export abstract class Item {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly cost: number,
  ) {}
}
