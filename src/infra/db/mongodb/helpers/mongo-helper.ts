import { MongoClient, Collection, ObjectId } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,
  async connect(url: string): Promise<void> {
    this.client = await MongoClient.connect(url)
  },
  async disconnect(): Promise<void> {
    await this.client.close()
  },
  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  },
  map(id: ObjectId, collection: any): any {
    return {
      id: id.toString(),
      ...collection
    }
  }
}
